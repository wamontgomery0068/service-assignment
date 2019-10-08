export class CounterService {

  // Create an activeToInactiveCounter variable and set to 0
  activeToInactiveCounter = 0;
  // Create an inactiveToActiveCounter variable and set to 0
  inactiveToActiveCounter = 0;

  // Create an incrementActiveToInactive method
  incrementActiveToInactive() {

    // Everytime incrementActiveToInactive is initiated it will be incremented by 1
    this.activeToInactiveCounter++;
    // Send message to the console to indicate how many times activeToInactiveCounter has be incremented
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    
  }

  // Create an incrementInactiveToActive method
  incrementInactiveToActive() {

    // Everytime incrementInactiveToActive is initiated it will be incremented by 1
    this.inactiveToActiveCounter++;
    // Send message to the console to indicate how many times inactiveToActiveCounter has be incremented
    console.log('Inactive to Active ' + this.inactiveToActiveCounter);

  }
}