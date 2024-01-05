#include <iostream>
#include "Player.cpp";

using namespace std;

int main() {

    Player* p = new Player(100, 10, 5);

    cout << p->getHealth() << endl;

    return 0;
}