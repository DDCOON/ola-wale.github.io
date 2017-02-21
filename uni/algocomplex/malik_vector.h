#ifndef malik_mvector
#define malik_mvector
#include <stdexcept>

using namespace std;
template <class Temp>
class  MVector{
public:
    typedef Temp * iterator;
    MVector();
    ~MVector();
    MVector(unsigned int size);
    MVector(unsigned int size, const Temp & initial);
    MVector(const MVector<Temp> & v);
    unsigned int capacity() const;
    unsigned int size() const;
    unsigned int at(unsigned int index);
    Temp & operator[](unsigned int index);
    MVector<Temp> & operator=(const MVector<Temp> &);
    void push_back(const Temp & value);
    void pop_back();
    void empty();
    Temp & front();
    Temp & back();
    void reserve(unsigned int capacity);
    void resize(unsigned int size);
private:
    unsigned int _size;
    unsigned int _capacity;
    Temp * buffer;
};

template<class Temp>
MVector<Temp>::MVector(){
    _capacity = 0;
    _size = 0;
    buffer = 0;
}

template<class Temp>
MVector<Temp>::MVector(const MVector<Temp> & v){
    _size = v._size;
    _capacity = v._capacity;
    buffer = new Temp[_size];
    for (unsigned int i = 0; i < _size; i++){
        buffer[i] = v.buffer[i];
    }
}

template<class Temp>
MVector<Temp>::MVector(unsigned int size){
    _capacity = size;
    _size = size;
    buffer = new Temp[size];
}

template<class Temp>
MVector<Temp>::MVector(unsigned int size, const Temp & initial){
    _size = size;
    _capacity = size;
    buffer = new Temp [size];
    for (unsigned int i = 0; i < size; i++){
        buffer[i] = initial;
    }
}
//assign operator
template<class Temp>
MVector<Temp> & MVector<Temp>::operator = (const MVector<Temp> & v){
    delete[ ] buffer;
    _size = v._size;
    _capacity = v._capacity;
    buffer = new Temp [_size];
    for (unsigned int i = 0; i < _size; i++){
        buffer[i] = v.buffer[i];
    }
    return *this;
}
//return the front element
template<class Temp>
Temp& MVector<Temp>::front(){
    return buffer[0];
}

//return the last element
template<class Temp>
Temp& MVector<Temp>::back(){
    return buffer[_size - 1];
}

//prepend an element to our vector
template<class Temp>
void MVector<Temp>::push_back(const Temp & v){
    if (_size >= _capacity)
        reserve(_capacity +5);
    buffer [_size++] = v;
}

//remove our vectors last element
template<class Temp>
void MVector<Temp>::pop_back(){
    _size--;
}

//reserve 'space' for an incoming element in our vector
template<class Temp>
void MVector<Temp>::reserve(unsigned int capacity){
    if(buffer == 0){
        _size = 0;
        _capacity = 0;
    }
    Temp * Newbuffer = new Temp [capacity];
    unsigned int l_Size = capacity < _size ? capacity : _size;
    for (unsigned int i = 0; i < l_Size; i++){
        Newbuffer[i] = buffer[i];
    }
    _capacity = capacity;
    delete[] buffer;
    buffer = Newbuffer;
}

//return the size of our vector
template<class Temp>
unsigned int MVector<Temp>::size()const{
    return _size;
}
//resize vector
template<class Temp>
void MVector<Temp>::resize(unsigned int size){
    reserve(size);
    _size = size;
}
//get element at index - position
template<class Temp>
unsigned int MVector<Temp>::at(unsigned int index){
     if(index > _size-1){
        std::cerr << "unavailable index " << "'" << index << "'" << "\n" ; //throw an exception if the index is larger than the value
        exit(0);
    }
    return buffer[index];
}
//same as at() but with an operator
template<class Temp>
Temp& MVector<Temp>::operator[](unsigned int index){
    if(index > _size-1){
        std::cerr << "unavailable  " << "'" << index << "'" << "\n" ; //throw an exception if the index is larger than the value
        exit(0);
    }
    return buffer[index];
}

//returns our vector's capacity
template<class Temp>
unsigned int MVector<Temp>::capacity()const{
    return _capacity;
}

//delete the buffer on destruct
template<class Temp>
MVector<Temp>::~MVector(){
    delete[] buffer;
}
//clear our vector
template <class Temp>
void MVector<Temp>::empty(){
    _capacity = 0;
    _size = 0;
    buffer = 0;
}


#endif
