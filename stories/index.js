import React from 'react'
import { action, storiesOf } from '@kadira/storybook'
import { ExpandablePanel, HeaderPanel, SettingsGroup, SettingsPanel } from '../src'
import { themed } from './storyUtil'

storiesOf('SettingsPanel', module)
  .add('Normal', () => themed(
    <SettingsPanel
    >
      <HeaderPanel
        title="Gmail"
        subtitle="Für alle aktiviert"
        description="https://mail.google.com/a/company.com"
        image={<img src="https://ssl.gstatic.com/apps/cpanel/resources/img/gmail-128.png" />}
      />
      <ExpandablePanel
        title="NutzerEinstellungen"
        description="Namensformate festlegen; Nutzereinstellungen z. B. für Designs, Lesebestätigungen und E-Mail-Bevollmächtigung aktivieren"
      >
        <SettingsGroup title="Lorem ipsum">
        </SettingsGroup>
      </ExpandablePanel>
      <ExpandablePanel
        title="E-Mail-Adressen"
        description="Lassen Sie sich alle E-Mail-Adressen und Aliase für Ihre Organisation anzeigen."
      />
      <ExpandablePanel
        title="Labs"
        description="Aktivieren Sie zusätzliche, experimentelle Gmail-Funktionen für Ihre Nutzer."
      />
      <ExpandablePanel
        title="Hosts"
        description="E-Mail-Hosts für erweiterte Weiterleitungsoptionen hinzufügen, um z. B. Nachrichten an Micosoft Exchange zu leiten"
      />
    </SettingsPanel>
  ))
