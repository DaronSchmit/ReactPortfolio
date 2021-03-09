import React from "react";
import "./statblockstyle.css";

function Statblock(props){
    return(
        
        //   <!-- DnD Statblock credit and license nested above closing </aside>. Inner HTML intentionally left out of semantics because it's gnarly not originally mine. -->
          <aside className="col-sm-8">
            <div className="stat-block">
              <hr className="orange-border" />
              <div className="section-left">
                  <div className="creature-heading">
                      <h1>Daron Schmit</h1>
                      <h2>Medium Humanoid, Neutral Good</h2>
                  </div> 
                  {/* <!-- creature heading --> */}
                  <svg height="5" width="100%" className="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                  <div className="top-stats">
                      <div className="property-line first">
                          <h4>Armor ClassName</h4>
                          <p>12</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line">
                          <h4>Hit Points</h4>
                          <p>22 (3d8 + 8)</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line last">
                          <h4>Speed</h4>
                          <p>30ft.</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <svg height="5" width="100%" className="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                      <div className="abilities">
                          <div className="ability-strength">
                              <h4>STR</h4>
                              <p>10 (+0)</p>
                          </div> 
                          {/* <!-- ability strength --> */}
                          <div className="ability-dexterity">
                              <h4>DEX</h4>
                              <p>14 (+2)</p>
                          </div> 
                          {/* <!-- ability dexterity --> */}
                          <div className="ability-constitution">
                              <h4>CON</h4>
                              <p>10 (+0)</p>
                          </div> 
                          {/* <!-- ability constitution --> */}
                          <div className="ability-intelligence">
                              <h4>INT</h4>
                              <p>16 (+3)</p>
                          </div> 
                          {/* <!-- ability intelligence --> */}
                          <div className="ability-wisdom">
                              <h4>WIS</h4>
                              <p>14 (+2)</p>
                          </div> 
                          {/* <!-- ability wisdom --> */}
                          <div className="ability-charisma">
                              <h4>CHA</h4>
                              <p>17 (+3)</p>
                          </div> 
                          {/* <!-- ability charisma --> */}
                      </div> 
                      {/* <!-- abilities --> */}
                      <svg height="5" width="100%" className="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                      <div className="property-line first">
                          <h4>Damage Immunities:</h4>
                          <p>none</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line">
                          <h4>Condition Immunities:</h4>
                          <p>None</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line">
                          <h4>Senses:</h4>
                          <br></br>
                          <p>Spectacle-Assisted Sight 15840ft Non-Spectatcle-Assisted 50ft (blind beyond this radius)</p>
                          <br></br>
                          <p>Passive Perception 12</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line">
                          <h4>Languages:</h4>
                          <p>English(native), Spanish(Elementary), Russian (Basic);</p>
                      </div> 
                      {/* <!-- property line --> */}
                      <div className="property-line last">
                          <h4>Challenge</h4>
                          <p>2 (600 XP)</p>
                      </div> 
                      {/* <!-- property line --> */}
                  </div> 
                  {/* <!-- top stats --> */}
                  <svg height="5" width="100%" className="tapered-rule">
                  <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                  <div className="property-block">
                      <h4>Catchy Song Susceptibility.</h4>
                      <p>Daron has disadvantage on checks to remain normal when subject to a <i>suitably dance-able</i> or <i>suitably karaoke-able song</i>.
                      If targeted by <i>dancing tunes</i> or <i>singing tunes</i>, Daron must succeed
                      on a Wisdom saving throw against the caster’s music save DC or
                      dance/sing quietly to himself for the duration of the song. If Daron fails this save by 5 or more, he will dance and sing obnoxiously regardless of spectators. Attempts to distract Daron using <i>dancing tunes</i> or <i>singing tunes</i> are always made at advantage, regardless of any other disadvantage that would otherwise negate it.</p>
                  </div> 
                  {/* <!-- property block --> */}
                  <div className="property-block">
                      <h4>WYSISWYG.</h4>
                      <p>Daron is pretty much an open book. Insight checks on Daron have advantage. If Daron notices someone making an Insight check, he may approach and ask what they want to know</p>
                  </div> 
                  {/* <!-- property block --> */}
              </div> 
              {/* <!-- section left --> */}
              <div className="section-right">
                  <div className="actions">
                      <h3>Actions</h3>
                      <div className="property-block">
                          <h4>Start Conversation.</h4>
                          <p>Daron attempts to start a conversation based on some shared interest or fun anectode. Target must make a DC13 Charisma saving throw or be roped into conversation. Creatures can repeat this throw at the end of each of their turns if they'd like. AFter two failed attempts to make the saving throw, the third is an automatic success, as Daron picks up the hint and ends the conversation.</p>
                      </div> 
                      {/* <!-- property block --> */}
                      <div className="property-block">
                          <h4>Write Code.</h4>
                          <p>Daron sits down and writes code for the next 50 to 500 rounds. Attempts to distract him are made at disadvantage unless <i>Catchy Song Susceptibility</i> is involved.</p>
                      </div> 
                      {/* <!-- property block --> */}
                  </div> 
                  {/* <!-- actions --> */}
                  <div className="actions">
                      <div className="property-block">
                          <p>Copyright (c) 2020 by Chad Carteret <a href="https://codepen.io/retractedhack/pen/gPLpWe" target="blank">https://codepen.io/retractedhack/pen/gPLpWe</a></p>
                      </div> 
                      {/* <!-- property block --> */}
                  </div> 
                  {/* <!-- actions --> */}
              </div> 
              {/* <!-- section right --> */}
              <hr className="orange-border bottom" />
          </div> 
          {/* <!-- stat block --> */}

          {/* <!-- This StatBlock is used and edited under the following License

              Copyright (c) 2020 by Chad Carteret (https://codepen.io/retractedhack/pen/gPLpWe)
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

              The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          --> */}
          </aside>
    )
}

export default Statblock;