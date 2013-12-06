
from mrjob.job import MRJob
from combine_user_visits import csv_readline


class TopTitleWords(MRJob):

    def mapper(self, line_no, line):
        """Extracts the that was visited"""
        cell = csv_readline(line)
        if cell[0] == 'A':
            for word in cell[3].split():
                yield word,1
                  # What  Key, Value  do we want to output?

    def reducer(self, word, in_title):
        """Sumarizes the visits of a user by adding them together.  If total visits
        is more than 20, yield the results"""
        total = sum(in_title)
                # How do we calculate the total visits from the visit_counts?
        yield None,(word,total)
                  # What  Key, Value  do we want to output
    
    def top(self,_,words):
        sortedList = sorted(words,key=lambda x: x[1],reverse=True)
        for d in sortedList[:10]:
            yield d
    
    def steps(self):
        return [
            self.mr(mapper=self.mapper,
                    combiner=self.reducer)
                    ,
            self.mr(reducer=self.top)
        ]


if __name__ == '__main__':
    TopTitleWords.run()