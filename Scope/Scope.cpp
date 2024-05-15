#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference {
    private:
    vector<int> elements;
  
    public:
    int maximumDifference;

    // Constructor that saves the vector to the elements instance variable
    Difference(vector<int> v) : elements(v), maximumDifference(0) {}

    // Computes the maximum absolute difference between any two elements
    void computeDifference() {
        int maxElement = *max_element(elements.begin(), elements.end());
        int minElement = *min_element(elements.begin(), elements.end());
        maximumDifference = maxElement - minElement;
    }
}; // End of Difference class

int main() {
    int N;
    cin >> N;
    
    vector<int> a;
    
    for (int i = 0; i < N; i++) {
        int e;
        cin >> e;
        a.push_back(e);
    }
    
    Difference d(a);
    
    d.computeDifference();
    
    cout << d.maximumDifference;
    
    return 0;
}
