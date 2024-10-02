import './App.css'

import { SyntheticEvent, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { I18nextProvider } from 'react-i18next'
import LoadingButton from '@mui/lab/LoadingButton'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import i18n from 'i18n'

export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DndProvider backend={HTML5Backend}>
          <DEMO />
        </DndProvider>
      </LocalizationProvider>
    </I18nextProvider>
  )
}

const DEMO = () => {
  const [tab, setTab] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue.toString())
  }

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid" label="Data Grid">
          <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
          <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
          <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
        </TreeItem>
        <TreeItem itemId="pickers" label="Date and Time Pickers">
          <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
          <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
        </TreeItem>
        <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" />
        </TreeItem>
        <TreeItem itemId="tree-view" label="Tree View">
          <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
        </TreeItem>
      </SimpleTreeView>
      <Box>
        <Button>test</Button>
        <LoadingButton variant="contained" color="primary">
          Button with loader
        </LoadingButton>
      </Box>
      <TabContext value={tab}>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <TabList onChange={handleChange} orientation="vertical" variant="scrollable">
            <Tab label="Tab 1" value="1" data-cy="main-settings-tab" />
            <Tab label="Tab 2" value="2" data-cy="social-wall-values-tab" />
            <Tab label="Tab 3" value="3" data-cy="points-settings-tab" />
            <Tab label="Tab 4" value="4" data-cy="widgets-tab" />
            <Tab label="Tab5" value="5" data-cy="special-moments-tab" />
          </TabList>
          <TabPanel value="1">Tab1</TabPanel>
          <TabPanel value="2">Tab2</TabPanel>
          <TabPanel value="3">Tab3</TabPanel>
          <TabPanel value="4">Tab4</TabPanel>
          <TabPanel value="5">Tab5</TabPanel>
        </Box>
      </TabContext>
    </Box>
  )
}
