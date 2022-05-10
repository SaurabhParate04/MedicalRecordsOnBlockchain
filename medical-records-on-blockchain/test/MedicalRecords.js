const { assert } = require('chai')
const MedicalRecords = artifacts.require('../contracts/MedicalRecords.sol')

require('chai').use(require('chai-as-promised')).should()

contract('MedicalRecords', ([patient1, patient2, physician]) => {
    let record
    
    before(async() => {
        record = await MedicalRecords.deployed()
    })

    describe('deployment', async() => {
        it('deploys successfully', async() => {
            const address = await MedicalRecords.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })

    describe('medical records', async() => {
        it('allows to create new medical record', async() => {
            result = await record.createRecord(patient1, physician, "Saurabh", "Parate", "Doctor Strange", "10/05/2022")
            // , "male", 21, 60, "8308893558", "9876543210", "Legend", "9822842666", "O Positive"
            const event = result.logs[0].args
            assert.equal(event.patient, patient1, 'patient address is correct')
            assert.equal(event.physician, physician, 'physician address is correct')
            assert.equal(event.firstName, "Saurabh", "patient name is correct")
            assert.equal(event.date, "10/05/2022", "Date is correct")
        })

        it('allows fill basic info', async() => {
            result = await record.fillBasicInfo(patient1, "male", 21, 60, "8308893558", "9876543210", "Legend", "9822842666", "O Positive")
            const event = result.logs[0].args
            assert.equal(event.gender, "male", 'patient\'s gender is correct')
            assert.equal(event.patientContact, "8308893558", 'patient contact is correct')
            assert.equal(event.bloodGroup, "O Positive", "patient\'s bloodgroup is correct")
        })

        it('returns stored info', async() => {
            result = await record.getPhysicianAddress(patient1, 0)
            const event = result.logs[0].args
            assert.equal(event.physicianAddress, physician, 'physician\'s address is correct')
        })

        // it('allows to read from blockchain', async() => {
        //     result = await donation.getPendingDonations('New contract test charity')
        //     // const event = result.logs[0].args
        //     // assert.equal(event.donor, '0x97aeD7655288AE0618D4d0d6c1342D5C893e19B7', 'donor is correct')
        // })

        // it('allows to update the charity funds', async() => {
        //     result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor1})
        //     const event = result.logs[0].args
        //     assert.equal(event.name, 'New contract test charity', 'name is correct')
        //     assert.equal(event.amount, '1000000000000000000', 'amount is correct')
        //     //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        // })

        // it('allows to update the charity funds second time', async() => {
        //     result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor2})
        //     const event = result.logs[0].args
        //     assert.equal(event.name, 'New contract test charity', 'name is correct')
        //     assert.equal(event.amount, '2000000000000000000', 'amount is correct')
        //     //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        // })

        // it('allows to update the charity funds third time', async() => {
        //     result = await donation.updateAmount('New contract test charity', {value: web3.utils.toWei('1', 'Ether'), from: donor3})
        //     const event = result.logs[0].args
        //     assert.equal(event.name, 'New contract test charity', 'name is correct')
        //     assert.equal(event.amount, '3000000000000000000', 'amount is correct')
        //     //assert.equal(event.transactions, [Array(2)], 'transactions are correct')
        // })

        // it('allows to read from blockchain', async() => {
        //     result = await donation.getPendingDonations('New contract test charity')
        //     const event = result.logs[0].args
        //     assert.equal(event.donor, '0x97aeD7655288AE0618D4d0d6c1342D5C893e19B7', 'donor is correct')
        // })

        // it('allows to transfer funds', async() => {
        //     let oldCharityBalance = await web3.eth.getBalance('0x6029f0c802CdB7776F2803BD73835578b72cF8f2')
        //     oldCharityBalance = new web3.utils.BN(oldCharityBalance)
            
        //     result = await donation.transferAmount('0x6029f0c802CdB7776F2803BD73835578b72cF8f2', 'New contract test charity')
        //     const event = result.logs[0].args
        //     assert.equal(event.name, 'New contract test charity', 'name is correct')
        //     assert.equal(event.amount, '0', 'amount is correct')
        //     //assert.equal(event.transactions, ['0x0000000000000000000000000000000000000000', '0', Array(2)], 'transactions are correct')

        //     let newCharityBalance = await web3.eth.getBalance('0x6029f0c802CdB7776F2803BD73835578b72cF8f2')
        //     newCharityBalance = new web3.utils.BN(newCharityBalance)

        //     let amount = web3.utils.toWei('3', 'Ether')
        //     amount = new web3.utils.BN(amount)

        //     const expectedBalance = oldCharityBalance.add(amount)
        //     assert.equal(newCharityBalance.toString(), expectedBalance.toString(), 'donation is transferred')
        // })
    })
})