import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'

// BEGIN STYING
// __________________________________________________________

const Form = styled.form`
  width: 50%;
  margin: auto;
`
const H1 = styled.h1`
  font-size: 30px;
  text-align: center;
`
const PrimaryLabel = styled.label`
  font-size: 20px;
`
const PrimaryContainer = styled.div`
  border: solid 1px red;
  margin: 20px 0;
`
const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border: solid 1px blue;
`



class CreateCardForm extends Component {
  constructor(){
    super()
    this.state = {
      cardName: undefined,
      primaryType: undefined,
      subTypes: [{name: undefined}],
      manaCsot: undefined,
      action: undefined,
      castRange: undefined,
      target: undefined,
      schools: [{name: undefined, level: undefined}],
      armor: undefined,
      health: undefined,
      defense: {roll: undefined, uses: undefined},
      channeling: undefined,
      equipmentSlot: undefined,
      abilities: [{
                    name: "",
                    action: "",
                    range: "",
                    damageType: "",
                    dice: "",
                    effects: [{roll: "", effectType: ""}],
                    damageModifiers: [{modifier: "", bonus: ""}]
                 }],
      description: undefined
    }

  }




  // Renders a specific amount of single digit options (1,2,3...)
  renderOptions = (num) => {
    let options = []
    for (var i = 0; i < num; i++) {
      options.push(i)
    }
    options = options.map((i) => {
      return <option value={`${i}`}>{i}</option>
    })
    return options
  }

  // Handle Functions
  // __________________________________________________________

  // ----- CARD NAME -----
  handleCardNameChange = e => {
    this.setState({ cardName: e.target.value })
  }
  // ----- CARD PRIMARY TYPE -----
  handlePrimaryTypeChange = e => {
    this.setState({ primaryType: e.target.value })
  }
  // ----- CARD SUB TYPE -----
  handleSubTypeNameChange = idx => e => {
    const newSubTypes = this.state.subTypes.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({ subTypes: newSubTypes })
  }
  handleAddSubType = e => {
    e.preventDefault()
    this.setState({
      subTypes: this.state.subTypes.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSubType = idx => (e) => {
    e.preventDefault()
    this.setState({
      subTypes: this.state.subTypes.filter((sub, sidx) => idx !== sidx)
    })
  }
  // ----- MANA COST -----
  handleManaCostChange = e => {
    this.setState({ manaCsot: e.target.value })
  }
  // ----- CAST RANGE -----
  handleCastRangeChange = e => {
    this.setState({ castRange: e.target.value })
  }
  // ----- VALID TARGETS -----
  handleTargetChange = e => {
    this.setState({ target: e.target.value })
  }
  // ----- MAGIC SCHOOLS -----
  handleSchoolNameChange = idx => e => {
    console.log(this.state.schools.name);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({ schools: newSchools })
  }
  handleSchoolLevelChange = idx => e => {
    console.log(this.state.schools.level);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, level: e.target.value}
    })
    this.setState({ schools: newSchools })
  }
  handleAddSchool = e => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSchool = (idx) => (e) => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.filter((s, sidx) => idx !== sidx) })
  }
  // ----- HEALTH -----
  handleHealthChange = e => {
    this.setState({ health: e.target.value })
  }
  // ----- ARMOR -----
  handleArmorChange = e => {
    this.setState({ armor: e.target.value })
  }
  // ----- DEFENSE -----
  handleDefenseRollChange = e => {
    this.setState({ defense: {roll: e.target.value, uses: this.state.defense.uses} })
  }
  handleDefenseUsesChange = e => {
    this.setState({ defense: {roll: this.state.defense.roll, uses: e.target.value} })
  }
  // ----- CHANNELING -----
  handleChannelingChange = e => {
    this.setState({ channeling: e.target.value })
  }
  // ----- EQUIPMENT -----
  handleEquipmentChange = e => {
    this.setState({ equipmentSlot: e.target.value })
  }
  // ----- ABILITIES -----
  handleAddAbility = e => {
    e.preventDefault()
    this.setState({
      abilities: this.state.abilities.concat([{
        name: "",
        action: "",
        range: "",
        damageType: "",
        dice: "",
        effects: [{roll: "", effectType: ""}],
        damageModifiers: [{modifier: "", bonus: ""}]
     }])
   });
  }
  handleRemoveAbility = (idx) => (e) => {
    e.preventDefault()
    this.setState({
      abilities: this.state.abilities.filter((s, sidx) => idx !== sidx) })
  }
  handleAbilityNameChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, name: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
  handleAbilityActionChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, action: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
  handleAbilityRangeChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, range: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
  handleAbilityDamageTypeChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, damageType: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
  handleAbilityDiceChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, dice: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
// Effects -------
handleAbilityDiceChange = idx => e => {
  const newAbilities = this.state.abilities.map((abil, sidx) => {
    if (idx !== sidx) return abil;
    return {...abil, dice: e.target.value}
  })
  this.setState({ abilities: newAbilities })
}


handleAddAbilityEffect = idx => (e) => {
  e.preventDefault()
  const newAbilities = this.state.abilities.map((abil, aidx) => {
    if (idx !== aidx) return abil
      return {...abil, effects: this.state.abilities[idx].effects.concat([{ roll: "", effectType: ""}]) }
  })
  this.setState({ abilities: newAbilities })
}

handleRemoveAbilityEffect = idx => (e) => {
  e.preventDefault()
  const newAbilities = this.state.abilities.map((abil, aidx) => {
    if (idx !== aidx) return abil
    return {...abil, effects: this.state.abilities[idx].effects.filter((eff, sidx) => idx !== sidx) }
  })
  this.setState({ abilities: newAbilities })
}

handleAbilityEffectRollChange = (idx, eidx) => e => {
  const newAbilities = this.state.abilities.map((abil, aidx) => {
    if (idx !== aidx) return abil
      const newEffects = abil.effects.map((eff, tidx) => {
        if (tidx !== eidx) return eff
        return {...eff, roll: e.target.value}
      })
      return {...abil, effects: newEffects}
  })
  this.setState({ abilities: newAbilities })
}

handleAbilityEffectTypeChange = (idx, eidx) => e => {
  const newAbilities = this.state.abilities.map((abil, aidx) => {
    if (idx !== aidx) return abil
      const newEffects = abil.effects.map((eff, tidx) => {
        if (tidx !== eidx) return eff
        return {...eff, effectType: e.target.value}
      })
      return {...abil, effects: newEffects}
  })
  this.setState({ abilities: newAbilities })
}

























  // SUBMIT CARD TO BE CREATED
  // __________________________________________________________
  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault()

    // Creating a card with the current state
    // let card = JSON.stringify(this.state);
    // fetch('https://secret-gorge-71512.herokuapp.com/api/card', {
    //   method: 'POST',
    //   body: card,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })

  }


  render() {
    return (
      <div>
        <H1>Create a Card</H1>
        <Form action="" method="">

          <PrimaryContainer>
            <PrimaryLabel>Card Name:</PrimaryLabel>
            <input onChange={this.handleCardNameChange} />
          </PrimaryContainer>


          <PrimaryContainer>
            <PrimaryLabel>Primary-type:</PrimaryLabel>
            <input onChange={this.handlePrimaryTypeChange} />
          </PrimaryContainer>


          <PrimaryContainer>
            <PrimaryLabel>Sub-types:</PrimaryLabel>
            {
              this.state.subTypes.map((type, idx) => (
                <div>
                <label>Name:</label>
                <input
                  placeholder={`Sub-type ${idx + 1}`}
                  value={type.name}
                  onChange={this.handleSubTypeNameChange(idx)}
                />
              <button onClick={this.handleRemoveSubType(idx)}> Remove </button>
                </div>
              ))
            }
            <button onClick={this.handleAddSubType}>Add Sub-type</button>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Mana cost:</PrimaryLabel>
              <select onChange={this.handleManaCostChange}>
                <option></option>
                {this.renderOptions(30)}
              </select>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Action:</PrimaryLabel>
              <select onChange={this.handleActionChange}>
                <option></option>
                <option value="full">Full</option>
                <option value="quick">Quick</option>
              </select>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Cast Range:</PrimaryLabel>
              <select onChange={this.handleCastRangeChange}>
                <option value="0-0">0-0</option>
                <option value="0-1">0-1</option>
                <option value="0-2">0-2</option>
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
              </select>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Target:</PrimaryLabel>
              <input onChange={this.handleTargetChange}/>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Schools:</PrimaryLabel>
            {
              this.state.schools.map((type, idx) => (
                <div>
                <label>Name:</label>
                <input
                  placeholder={`School ${idx + 1}`}
                  value={type.name}
                  onChange={this.handleSchoolNameChange(idx)}
                />
              <select onChange={this.handleSchoolLevelChange(idx)}>
                  <option></option>
                  {this.renderOptions(7)}
                </select>
              <button onClick={this.handleRemoveSchool(idx)}> Remove </button>
                </div>
              ))
            }
            <button onClick={this.handleAddSchool}>Add School</button>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Health:</PrimaryLabel>
              <input onChange={this.handleHealthChange}/>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Armor:</PrimaryLabel>
              <input onChange={this.handleArmorChange}/>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Defense</PrimaryLabel>
              <SecondaryContainer>
                <label>Defense Roll:</label>
                <select onChange={this.handleDefenseRollChange}>
                  <option></option>
                  <option value="1+">1+</option>
                  <option value="2+">2+</option>
                  <option value="3+">3+</option>
                </select>
                <label>Defense use number:</label>
                <select onChange={this.handleDefenseUsesChange}>
                  <option></option>
                  <option value="infinite">infinite</option>
                  <option value="1x">1x</option>
                  <option value="2x">2x</option>
                  <option value="3x">3x</option>
                </select>
              </SecondaryContainer>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Channeling:</PrimaryLabel>
              <select onChange={this.handleChannelingChange}>
                <option></option>
                {this.renderOptions(10)}
              </select>
          </PrimaryContainer>

          <PrimaryContainer>
            <PrimaryLabel>Equipment Slot:</PrimaryLabel>
              <div>
                <label>
                  <input type="radio" value="" name="equipment" onChange={this.handleEquipmentChange}/>None
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="helmet" name="equipment" onChange={this.handleEquipmentChange}/>Helment
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="amulet" name="equipment" onChange={this.handleEquipmentChange}/>Amulet
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="cloak" name="equipment" onChange={this.handleEquipmentChange}/>Cloak
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="ring" name="equipment" onChange={this.handleEquipmentChange}/>Ring
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="chest" name="equipment" onChange={this.handleEquipmentChange}/>Chest Piece
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="belt" name="equipment" onChange={this.handleEquipmentChange}/>Belt
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="gloves" name="equipment" onChange={this.handleEquipmentChange}/>Gloves
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="shield" name="equipment" onChange={this.handleEquipmentChange}/>Shield
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="boots" name="equipment" onChange={this.handleEquipmentChange}/>Boots
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="weapon or shield" name="equipment" onChange={this.handleEquipmentChange}/>One-handed Weapon
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="weapon and shield" name="equipment" onChange={this.handleEquipmentChange}/>Two-handed Weapon
                </label>
              </div>
            </PrimaryContainer>

            <PrimaryContainer>
              <PrimaryLabel>Abilities:</PrimaryLabel>
                {
                  this.state.abilities.map((abil, idx) => (
                    <SecondaryContainer>
                      <label>Name:</label>
                      <input
                        placeholder={`Ability ${idx + 1}`}
                        onChange={this.handleAbilityNameChange(idx)}
                      />
                      <label>Action:</label>
                      <select onChange={this.handleAbilityActionChange(idx)}>
                        <option></option>
                        <option value="full">Full</option>
                        <option value="quick">Quick</option>
                      </select>
                      <label>Range:</label>
                      <select onChange={this.handleAbilityRangeChange(idx)}>
                        <option></option>
                        <option value="melee">Melee</option>
                        <option value="ranged 0-1">Ranged 0-1</option>
                        <option value="ranged 0-2">Ranged 0-2</option>
                        <option value="ranged 1-1">Ranged 1-1</option>
                        <option value="ranged 1-2">Ranged 1-2</option>
                      </select>
                      <label>Damage Type:</label>
                      <select onChange={this.handleAbilityDamageTypeChange(idx)}>
                        <option></option>
                        <option value="flame">Flame</option>
                        <option value="hydro">Hydro</option>
                        <option value="light">Light</option>
                        <option value="lightning">Lightning</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="wind">Wind</option>
                      </select>
                      <label>Damage Dice:</label>
                      <select onChange={this.handleAbilityDiceChange(idx)}>
                        <option></option>
                        {this.renderOptions(12)}
                      </select>
                      <label>Effects:</label>
                        {
                          this.state.abilities[idx].effects.map((eff, eidx) => (
                            <div>
                              <h1>{`Effect ${eidx + 1}`}</h1>
                              <label>Roll:</label>
                              <input onChange={this.handleAbilityEffectRollChange(idx, eidx)}/>
                              <label>Type:</label>
                              <input onChange={this.handleAbilityEffectTypeChange(idx, eidx)}/>
                              <button onClick={this.handleRemoveAbilityEffect(idx)}>Remove Effect</button>
                            </div>
                          ))
                        }
                        <button onClick={this.handleAddAbilityEffect(idx)}>Add Effect</button>

                      <button onClick={this.handleRemoveAbility(idx)}> Remove Ability </button>
                    </SecondaryContainer>
                  ))
                }
                <button onClick={this.handleAddAbility}>Add Ability</button>
            </PrimaryContainer>



          <button onClick={this.handleSubmit}>Create!</button>
        </Form>
      </div>
    );
  }
}

export default CreateCardForm;

// name: "",
// action: "",
// range: "",
// damageType: "",
// dice: "",
// effects: [{roll: "", effectType: ""}],
// damageModifiers: [{modifier: "", bonus: ""}]
