// This is base class

class User {
    constructer() {

    }

    setName(name) {
        this.name = name;
    }

    getName(name) {
        return this.name;
    }
}

const user = new User();
user.setName('Bau');
console.log(`This is a ${user.getName()}`);