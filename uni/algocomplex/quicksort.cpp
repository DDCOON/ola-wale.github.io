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

uint64_t partition(int low, int high){
    uint64_t pivot = cards[(low + high) / 2];
    while (low <= high)
    {
        while (cards[low] < pivot) low++;
        while (cards[high] > pivot) high--;
        if (low <= high)
        {
            uint64_t temp = cards[low];
            cards[low] = cards[high];
            cards[high] = temp;
            low++;
            high--;
        }
    }
    return low;
}

void quicksort(uint64_t low,uint64_t high){
    uint64_t index = partition(low, high);
    if (low < index - 1)
    quicksort(low, index - 1);
    if (index < high)
    quicksort(index, high);
}

int main(){
    int high = cards.size() - 1;
    cout << "Hey we are the Olsen gang, here's our unsorted list of credit card numbers. \n";
    for (int i = 0; i < high + 1; ++i)
    {
        cout << cards[i];
        if(i != cards.size()-1)
        cout << " , ";
    }
    cout << "\n\n";
    //sort
    quicksort(0, high);
    cout << "\nLook we've sorted them: \n";
    for (int i = 0; i < high + 1; ++i){
        cout << cards[i];
        if(i != cards.size()-1)
        cout << " , ";
    }
    return 0;
}
