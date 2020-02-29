const person = [

    {
        id: 'person1',
        name: 'Aaron',
        isDead: false,
    },
    {
        id: 'person2',
        name: 'Anca',
        isDead: false,
    },
    {
        id: 'person3',
        name: 'Beth',
        isDead: false,
    },
    {
        id: 'person4',
        name: 'Bethany',
        isDead: false,
    },
    {
        id: 'person5',
        name: 'Christopher',
        isDead: false,
    },
    {
        id: 'person6',
        name: 'David',
        isDead: false,
    },
    {
        id: 'person7',
        name: 'Davis',
        isDead: false,
    },
    {
        id: 'person8',
        name: 'Dylan',
        isDead: false,
    },
    {
        id: 'person9',
        name: 'Joey',
        isDead: false,
    },
    {
        id: 'person10',
        name: 'John',
        isDead: false,
    },
    {
        id: 'person11',
        name: 'Jose',
        isDead: false,
    },
    {
        id: 'person12',
        name: 'Kayle',
        isDead: false,
    },
    {
        id: 'person13',
        name: 'Kenneth',
        isDead: false,
    },
    {
        id: 'person14',
        name: 'Liza',
        isDead: false,
    },
    {
        id: 'person15',
        name: 'Michele',
        isDead: false,
    },
    {
        id: 'person16',
        name: 'Monique',
        isDead: false,
    },
    {
        id: 'person17',
        name: 'Ola',
        isDead: false,
    },
    {
        id: 'person18',
        name: 'Sarah',
        isDead: false,
    },
    {
        id: 'person19',
        name: 'Stephen',
        isDead: false,
    },
    {
        id: 'person20',
        name: 'Steven',
        isDead: false,
    },
    {
        id: 'person21',
        name: 'Todd',
        isDead: false,
    },
    {
        id: 'person22',
        name: 'Zach',
        isDead: true,
    },
    {
        id: 'person23',
        name: 'Zoe',
        isDead: true,
    },
    {
        id: 'person24',
        name: 'Luke',
        isDead: true,
    },
    {
        id: 'person25',
        name: 'Mary',
        isDead: true,
    },

]




const getAlivePersons = () => {
    return person.filter((x) => x.isDead === false);
}

const getDeadPersons = () => {
    return person.filter((x) => x.isDead);
}

const randomMurder = () => {
    // this function only kills people who are alive
    const alivePeople = getAlivePersons();
    const randomNum = Math.floor(Math.random() * alivePeople.length);
    const deadPersonsId = alivePeople[randomNum].id; //person7
    const deadMan = person.findIndex((x) => x.id === deadPersonsId);
    person[deadMan].isDead = true;
}

export default {
    getAlivePersons,
    getDeadPersons,
    randomMurder
};