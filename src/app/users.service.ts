import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {

    // Create an Active Users Array with a few names
    activeUsers = ['Andrew', 'Joel', 'Angela'];
    // Create an Inactive Users Array with a few names
    inactiveUsers = ['Daniel','Joseph','John', 'Brian']

    constructor(private counterService: CounterService){}

    // Create a setToActive method
    setToActive(id: number) {

        // Push or Add the activeUser into the inactiveUsers array by their id
        this.activeUsers.push(this.inactiveUsers[id]);

        // Splice or Delete the inactiveUser from the activeUsers array by their id
        this.inactiveUsers.splice(id, 1);

        this.counterService.incrementInactiveToActive();

    }

    // Create a setToInactive method
    setToInactive(id: number) {

        // Push or Add the inactiveUser into the activeUsers array by their id
        this.inactiveUsers.push(this.activeUsers[id]);

        // Splice or Delete the activeUser from the inactiveUsers array by their id
        this.activeUsers.splice(id, 1);

        this.counterService.incrementActiveToInactive();

    }
}