#include <iostream>
#include <conio.h>
#include <time.h>
#include <stdlib.h>
#include "malik_vector.h"
using namespace std;

int main(){
   MVector<int> v;
   MVector<int> v2; //to test the = operator
   for(int i = 0; i<5;i++){
        v.push_back(i);
   }
   cout << "The size of our vector is " << v.size() << endl; // should return 5
   v.pop_back(); // remove the last element
   cout << "The size of our vector is " << v.size() << endl;  //let's get the size of our vector, should return four now
   cout << "The fourth element is " << v.at(3) << endl; //should return 3
   cout << "The second element is " << v[1] << endl; //should return 1
   cout << "The front element is " << v.front() << endl; //get the front element, should return 0
   cout << "The back element is " << v.back() << endl; //get the back element, should return 3
   //we should get an error here since a "2" - 3rd element doesn't exist
        //cout << v[2] << endl;
   //we should get an error here since a "1" - 2nd element doesn't exist
        //cout << v.at(1) << endl;
   v2 = v; //'swap' assign
   cout << "The size of our 2nd test vector is " << v2.size() << endl; //should return 4, same as our initial vector
   //reserve 2 spaces
   v.reserve(2);
   //erase the vector
   v.empty();
   return 0;
}
