let restauraunt = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize

    }
}

restauraunt.seatParty(72)
console.log(restauraunt.checkAvailability(4))
restauraunt.removeParty(5)
console.log(restauraunt.checkAvailability(4))
