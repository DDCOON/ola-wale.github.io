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

void merge(uint64_t l, uint64_t m, uint64_t r)
{
    uint64_t i, j, k;
    uint64_t n1 = m - l + 1;
    uint64_t n2 =  r - m;
    uint64_t L[n1], R[n2];
    for(i = 0; i < n1; i++)
        L[i] = cards[l + i];
    for(j = 0; j < n2; j++)
        R[j] = cards[m + 1+ j];
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            cards[k] = L[i];
            i++;
        }
        else
        {
            cards[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1)
    {
        cards[k] = L[i];
        i++;
        k++;
    }
    while (j < n2)
    {
        cards[k] = R[j];
        j++;
        k++;
    }
}
void mergeSort(uint64_t l, uint64_t r)
{
    if (l < r)
    {
        uint64_t m = l+(r-l)/2; //Same as (l+r)/2, but avoids overflow for large l and h
        mergeSort(l, m);
        mergeSort( m+1, r);
        merge(l, m, r);
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
    mergeSort(0,high-1);
    cout << "\nLook we've sorted them: \n";
    for (int i = 0; i < high + 1; ++i){
        cout << cards[i];
        if(i != cards.size()-1)
        cout << " , ";
    }
    return 1;
}
