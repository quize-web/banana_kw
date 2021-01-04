# coding=utf-8
try:
    from collections import Counter
except ImportError:
    from backport_collections import Counter
from .tokenizer import Tokenizer
from .parser import Parser
from .labeler import IOBLabeler
from .extractor import Extractor
from .normalizer import Normalizer
from .ranker import Ranker
import json


class Term(object):
    def __init__(self, words, normalized, count=1):
        self.words = words
        self.word_count = len(words)
        self.normalized = normalized
        self.count = count

    def __eq__(self, other):
        return self.normalized == other.normalized

    def __hash__(self):
        return hash(self.normalized)

    def __unicode__(self):
        return self.normalized

    def __str__(self):
        return self.normalized


class TermExtractor(object):
    """
    Извлечение ключевых слов из текста.
    """

    def __init__(self, tokenizer=None, parser=None, labeler=None, extractor=None, normalizer=None, ranker=None):
        self.tokenizer = tokenizer or Tokenizer()
        self.parser = parser or Parser()
        self.labeler = labeler or IOBLabeler()
        self.extractor = extractor or Extractor()
        self.normalizer = normalizer or Normalizer()
        self.ranker = ranker or Ranker()

    def __call__(self, text, limit=None, weight=None, strings=False, nested=False):

        #
        tokens = self.tokenizer(text)

        # отладка
        # f = open('/usr/src/app/src/tokens.txt', 'w')
        # # f.write('\n\ntokens = ' + repr(tokens) + '\n')
        # f.write('\n\ntokens = ' + json.dumps(tokens) + '\n')
        # f.close()

        #
        parsed_tokens = [self.parser(token) for token in tokens]

        #
        iob_sequence = self.labeler(parsed_tokens)

        # отладка
        # f = open('/usr/src/app/src/iob.txt', 'w')
        # f.write('\n')
        # for token, label in zip(parsed_tokens, iob_sequence):
        #     f.write(str(label) + ' ' + str(token) + '\n')
        # f.close()

        #
        chunks = self.extractor(parsed_tokens, iob_sequence, nested=nested)

        # отладка
        # f = open('/usr/src/app/src/chunks.txt', 'w')
        # f.write('\n')
        # i = 0
        # for chunk in self.extractor(parsed_tokens, iob_sequence, nested=nested):
        #     i = i + 1
        #     f.write('\nchunk: ' + str(i) + '\n')
        #     for x, token in enumerate(chunk):
        #         f.write(repr(token.parsed) + ',\n')
        # f.close()

        #
        terms = [Term(chunk, self.normalizer(chunk)) for chunk in chunks]

        # отладка
        # f = open('/usr/src/app/src/terms.txt', 'w')
        # f.write('\n')
        # x = 0
        # for term in terms:
        #     x = x + 1
        #     f.write('term ' + str(x) + ': ' + term.normalized + '\n')
        # f.close()

        counter = Counter(terms)
        counted_terms = counter.keys()
        for term in counted_terms:
            term.count = counter[term]

        sorted_terms = self.ranker(counted_terms, weight=weight)
        result = sorted_terms[:limit]



        if strings:
            return [term.normalized for term in result]
        else:
            return result
