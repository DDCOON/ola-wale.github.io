#include<iostream>
#include <random> //requires 11 standard
#include <vector>
#include <algorithm>
#include <cstdint> //we need this for large integers.
using namespace std;

vector<uint64_t> generateCardNumbers();
vector<uint64_t> cards = generateCardNumbers();
//generate random credit card numbers
vector<uint64_t> generateCardNumbers(){
    uint64_t min = 539953344235272;
    uint64_t minCopy = min;
    uint64_t max = 539953344245272;
    vector<uint64_t> numbers;
    //unique array
    while(min<=max){
        uint64_t randNum = rand()%(max-minCopy + 1) + minCopy;
        if(std::find(numbers.begin(),numbers.end(),randNum) == numbers.end() ){
            numbers.push_back(randNum);
            min++;
        }
    }
    return numbers;
}

void BubbleSort(int count)
{
    for(int i=0;i<count-1;i++)
	{
		for(int j=0;j<count-1;j++)
		{
			if(cards[j]>cards[j+1])
				swap(cards[j],cards[j+1]);
		}
	}
}

int main(){
    int high = cards.size();
    cout << "Hey we are the Olsen gang, here's our unsorted list of credit card numbers. \n";
    for (int i = 0; i < high + 1; ++i)
    {
        cout << cards[i];
        if(i != cards.size()-1)
        cout << " , ";
    }
    cout << "\n\n";
    //sort
    BubbleSort(high);
    cout << "\nLook we've sorted them: \n";
    for (int i = 0; i < high + 1; ++i){
        cout << cards[i];
        if(i != cards.size()-1)
        cout << " , ";
    }
    return 0;
}
