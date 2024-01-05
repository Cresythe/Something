#include "Player.h"

Player::Player(int health, int defense, int attack) {
    this->health = health;
    this->defense = defense;
    this->attack = attack;
}

void Player::setHealth(int h) {
    this->health = h;
}

int Player::getHealth() {
    return this->health;
}