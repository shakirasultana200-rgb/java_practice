class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(patient) {
        this.items.push(patient);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

}

const hospital = new Queue();

hospital.enqueue("Rahim");
hospital.enqueue("Karim");
hospital.enqueue("Salma");
hospital.enqueue("Nusrat");
hospital.enqueue("Sadia");

hospital.dequeue();
hospital.dequeue();

console.log(hospital.items);