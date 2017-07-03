SettingsPanel example:
```
const { ExpandablePanel, HeaderPanel, SettingsGroup, SettingsItem } = require('../..');
const { FlatButton, SelectField, MenuItem } = require('material-ui');
<SettingsPanel>
      <HeaderPanel
        title="Gmail"
        subtitle="Für alle aktiviert"
        description="https://mail.google.com/a/company.com"
        image={<img src="https://ssl.gstatic.com/apps/cpanel/resources/img/gmail-128.png"/>}
      />
      <ExpandablePanel
        title="Nutzer Einstellungen"
        description="Namensformate festlegen; Nutzereinstellungen z. B. für Designs, Lesebestätigungen und E-Mail-Bevollmächtigung aktivieren"
      >
        <SettingsGroup title="Lorem ipsum">
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
                    <SelectField
                      floatingLabelText="Frequency"
                      value={1}
                    >
                      <MenuItem value={1} primaryText="Never" />
                      <MenuItem value={2} primaryText="Every Night" />
                      <MenuItem value={3} primaryText="Weeknights" />
                      <MenuItem value={4} primaryText="Weekends" />
                      <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
            <FlatButton label="Change"/>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
        </SettingsGroup>
      </ExpandablePanel>
      <ExpandablePanel
        title="E-Mail-Adressen"
        description="Lassen Sie sich alle E-Mail-Adressen und Aliase für Ihre Organisation anzeigen."
      >
        <SettingsGroup title="Lorem ipsum">
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
            <FlatButton label="Change"/>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
        </SettingsGroup>
      </ExpandablePanel>
      <ExpandablePanel
        title="Labs"
        description="Aktivieren Sie zusätzliche, experimentelle Gmail-Funktionen für Ihre Nutzer."
      >
        <SettingsGroup title="Lorem ipsum">
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
            <FlatButton label="Change"/>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
        </SettingsGroup>
      </ExpandablePanel>
      <ExpandablePanel
        title="Hosts"
        description="E-Mail-Hosts für erweiterte Weiterleitungsoptionen hinzufügen, um z. B. Nachrichten an Micosoft Exchange zu leiten"
      >
        <SettingsGroup title="Lorem ipsum">
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
            <FlatButton label="Change"/>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
          <SettingsItem title="Lorem ipsum" description="Description">
            <div>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </div>
          </SettingsItem>
        </SettingsGroup>
      </ExpandablePanel>
    </SettingsPanel>
```