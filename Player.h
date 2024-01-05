class Player {
    public:

        Player(int health, int attack, int defense);

        int health;
        int attack;
        int defense;

        void setHealth(int h);
        int getHealth();

    private:
        int id;
}