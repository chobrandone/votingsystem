exports.vote=class Vote{
    constructor(name,dateofbirth,placeofbirth,Gender,CNIC,PoliticalParty,Zip){
        this.name=name;
        this.dateofbirth=dateofbirth;
        this.placeofbirth=placeofbirth;
        this.Gender=Gender;
        this.CNIC=CNIC;
        this.PliticalParty=PoliticalParty;
        this.Zip=Zip;
    }
    getVoteDetails(){
        console.log(JSON.stringify(this))
    }
}