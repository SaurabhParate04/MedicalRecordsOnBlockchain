pragma solidity >=0.4.22 <0.9.0;

contract MedicalRecords {

    struct BasicInfo {
        address patient;
        address physician;
        string firstName;
        string lastName;
        string physicianName;
        string date;
        string gender;
        uint age;
        uint weight;
        string patientContact;
        string physicianContact;
        string patientAddress;
        string emergencyContactName;
        string emergencyContactNumber;
        string bloodGroup;
    }

    struct MajorIllness {
        string illness;
        string startDate;
        string endDate;
        string physician;
        string hospital;
        string notes;
    }

    struct SurgicalProcedureHistory {
        string procedure;
        string startDate;
        string endDate;
        string physician;
        string hospital;
        string notes;
    }

    struct Vaccinations {
        string name;
        string usage;
        string date;
        string physician;
        string hospital;
        string notes;
    }

    struct Medicine {
        string name;
        string dosage;
        string frequency;
        string startDate;
        string endDate;
    }

    struct Medications {
        uint medicinesCount;
        string physician;
        string purpose;
        mapping (uint => Medicine) medicine;
    }

    struct AllRecords {
        uint recordNo;
        mapping (uint => Record) allRecords;
    }

    struct Record {
        BasicInfo generalInfo;
        uint majorIllnessCount;
        uint surgicalProcedureHistoryCount;
        uint vaccinationsCount;
        uint medicationsCount;
        mapping (uint => MajorIllness) majorIllnesses;
        mapping (uint => SurgicalProcedureHistory) surgicalProcedureHistory;
        mapping (uint => Vaccinations) vaccinations;
        mapping (uint => Medications) medications;
    }

    event RecordCreated(
        address patient,
        string firstName,
        address physician,
        string physicianName,
        string date
    );

    event BasicInfoCreated(
        string gender,
        string patientContact,
        string bloodGroup
    );

    event getAddress(
        address physicianAddress
    );

    mapping (address => AllRecords) medicalRecords;

    function createRecord(address _patientAddress, address _physicianAddress, string memory _firstName, string memory _lastName, string memory _physicianName, string memory _date) public {
        
        medicalRecords[_patientAddress].allRecords[0].generalInfo.patient = _patientAddress;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.physician = _physicianAddress;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.firstName = _firstName;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.lastName = _lastName;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.physicianName = _physicianName;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.date = _date;

        medicalRecords[_patientAddress].allRecords[0].majorIllnessCount = 0;
        medicalRecords[_patientAddress].allRecords[0].surgicalProcedureHistoryCount = 0;
        medicalRecords[_patientAddress].allRecords[0].medicationsCount = 0;

        emit RecordCreated(medicalRecords[_patientAddress].allRecords[0].generalInfo.patient, medicalRecords[_patientAddress].allRecords[0].generalInfo.firstName, medicalRecords[_patientAddress].allRecords[0].generalInfo.physician, medicalRecords[_patientAddress].allRecords[0].generalInfo.physicianName, medicalRecords[_patientAddress].allRecords[0].generalInfo.date);
    }

    function fillBasicInfo(address _patientAddress, string memory _gender, uint _age, uint _weight, string memory _patientContact, string memory _physicianContact, string memory _emergencyContactName, string memory _emergencyContactNumber, string memory _bloodGroup ) public {
        
        medicalRecords[_patientAddress].allRecords[0].generalInfo.gender = _gender;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.age = _age;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.weight = _weight;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.patientContact = _patientContact;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.physicianContact = _physicianContact;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.emergencyContactName = _emergencyContactName;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.emergencyContactNumber = _emergencyContactNumber;
        medicalRecords[_patientAddress].allRecords[0].generalInfo.bloodGroup = _bloodGroup;

        emit BasicInfoCreated(medicalRecords[_patientAddress].allRecords[0].generalInfo.gender, medicalRecords[_patientAddress].allRecords[0].generalInfo.patientContact, medicalRecords[_patientAddress].allRecords[0].generalInfo.bloodGroup);
    }

    function getPhysicianAddress(address _patientAddress, uint recordNo) public returns(address) {
        emit getAddress(medicalRecords[_patientAddress].allRecords[recordNo].generalInfo.physician);
        return medicalRecords[_patientAddress].allRecords[recordNo].generalInfo.physician;
    }

    // function createCharity(string memory _name) public {
    //     charities[_name].name = _name;
    //     charities[_name].amount = 0;
    //     charities[_name].donationCount = 0;
    //     emit CharityCreated(charities[_name].name, charities[_name].amount, charities[_name].donationCount); // charities[_name].transactions[0]
    // }

    // function updateAmount(string memory _name) public payable {
    //     charities[_name].amount = charities[_name].amount + msg.value;
    //     uint16 _count = charities[_name].donationCount;
    //     charities[_name].transactions[_count] = Donation(msg.sender, msg.value);
    //     charities[_name].donationCount = _count + 1;
    //     emit AmountUpdated(charities[_name].name, charities[_name].amount, charities[_name].donationCount, charities[_name].transactions[_count].donor, charities[_name].transactions[_count].amount);
    // }

    // function transferAmount(address _charityAddress, string memory _name) public {
    //     uint _amount = charities[_name].amount;
    //     address payable _address = payable(_charityAddress);
    //     _address.transfer(_amount);

    //     for(uint16 i=0; i<charities[_name].donationCount; i++) {
    //         charities[_name].transactions[i].amount = 0;
    //         charities[_name].transactions[i].donor = address(0x0000000000000000000000000000000000000000);
    //     }

    //     charities[_name].amount = 0;
    //     charities[_name].donationCount = 0;

    //     emit AmountTransferred(charities[_name].name, charities[_name].amount, charities[_name].donationCount); // charities[_name].transactions[1]
    // }

    // function revertAmount(string memory _name) public {
    //     uint16 count = charities[_name].donationCount;

    //     for(uint16 i=0; i<count; i++) {
    //         // Revert Eth back
    //         address payable _revertAddress = payable(charities[_name].transactions[i].donor);
    //         uint _revertAmount = charities[_name].transactions[i].amount;
    //         _revertAddress.transfer(_revertAmount);

    //         emit AmountReverted(_revertAddress, _revertAmount);

    //         // Reset logs of charity on blockchain
    //         charities[_name].transactions[i].amount = 0;
    //         charities[_name].transactions[i].donor = address(0x0000000000000000000000000000000000000000);
    //     }

    //     charities[_name].amount = 0;
    //     charities[_name].donationCount = 0;

    //     emit FullAmountReverted(charities[_name].name, charities[_name].amount, charities[_name].donationCount); // charities[_name].transactions[1]
    // }

    // function getBalance(string memory _name) public returns(uint) {
    //     emit Balance(charities[_name].amount);
    //     return charities[_name].amount;
    // }

    // function getPendingDonations(string memory _name) public returns(Donation [] memory) {
        
    //     uint16 _n = charities[_name].donationCount;
    //     Donation[] memory _arr = new Donation[](_n);

    //     for (uint16 _i = 0; _i < _n; _i++) {
    //         _arr[_i] = charities[_name].transactions[_i];
    //         emit PendingTransactions(_arr[_i].donor, _arr[_i].amount);
    //     }
        
    //     return _arr;
    // }
}