import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { FlatButton } from 'material-ui'
import { ExpandablePanel, HeaderPanel, SettingsGroup, SettingsItem, SettingsPanel } from '../src'
import { themed } from './storyUtil'

storiesOf('SettingsPanel', module)
  .add('Normal', () => themed(
    <SettingsPanel>
      <HeaderPanel
        title="Gmail"
        subtitle="Für alle aktiviert"
        description="https://mail.google.com/a/company.com"
        image={<img src="https://ssl.gstatic.com/apps/cpanel/resources/img/gmail-128.png" />}
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
            <FlatButton label="Change" />
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
            <FlatButton label="Change" />
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
            <FlatButton label="Change" />
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
            <FlatButton label="Change" />
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
  ))
