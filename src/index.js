import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/TopBar';
import { TopBarTitle } from './components/TopBar';
import PreviewGrid from './components/PreviewGrid';
import CategoryOverview from './components/CategoryOverview';
import SearchBar from './components/SearchField';
import './styles.css';

const tags = {
  assetTypes: {
    id: 'GUID01',
    type: 'category',
    mutuallyExclusive: true,
    dependsOn: [],
    name: 'Asset Types',
    color: '#123456',
    tags: {
      texture: {
        id: 'GUID02',
        type: 'tag',
        parentId: 'GUID01',
        name: 'Texture'
      },
      mesh: {
        id: 'GUID03',
        type: 'tag',
        parentId: 'GUID01',
        name: 'Mesh'
      }
    }
  },
  physicalTraits: {
    id: 'GUID04',
    type: 'category',
    mutuallyExclusive: true,
    dependsOn: ['GUID01'],
    name: 'Asset Types',
    color: '#123456',
    tags: {
      wall: {
        id: 'GUID05',
        type: 'tag',
        parentId: 'GUID04',
        name: 'Wall'
      },
      floor: {
        id: 'GUID06',
        type: 'tag',
        parentId: 'GUID04',
        name: 'Floor'
      },
      tiles: {
        id: 'GUID07',
        type: 'tag',
        parentId: 'GUID04',
        name: 'Tiles'
      },
      weathered: {
        id: 'GUID08',
        type: 'tag',
        parentId: 'GUID04',
        name: 'Weathered'
      }
    }
  }
};

const metaData = [
  {
    name: 'wall_old_stone_001.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'wall', 'tiling'],
    type: 'texture'
  },
  {
    name: 'wall_old_stone_002.png',
    x: 4096,
    y: 4096,
    depth: 24,
    channels: 'RBG',
    tags: ['texture', 'wall'],
    type: 'texture'
  },
  {
    name: 'wall_old_stone_003.png',
    x: 4096,
    y: 4096,
    depth: 8,
    channels: 'Palette',
    tags: ['texture', 'wall'],
    type: 'texture'
  },
  {
    name: 'floor_broken_tiles_001.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles', 'weathered'],
    type: 'texture'
  },
  {
    name: 'floor_broken_tiles_002.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles', 'weathered'],
    type: 'texture'
  },
  {
    name: 'floor_broken_tiles_003.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles', 'cracked'],
    type: 'texture'
  },
  {
    name: 'floor_tiles_001.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles'],
    type: 'texture'
  },
  {
    name: 'floor_tiles_002.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles'],
    type: 'texture'
  },
  {
    name: 'floor_tiles_003.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    tags: ['texture', 'floor', 'tiles'],
    type: 'texture'
  },
  {
    name: 'Image10.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image11.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image12.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image13.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image14.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image15.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image16.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image17.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image18.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image19.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image20.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image21.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  },
  {
    name: 'Image22.png',
    x: 4096,
    y: 4096,
    depth: 32,
    channels: 'RBGA',
    type: 'texture'
  }
];

export const PreviewContext = React.createContext();

class PreviewProvider extends React.Component {
  state = {
    metaData,
    tags
  };

  render() {
    const { children } = this.props;

    return (
      <PreviewContext.Provider value={this.state}>
        {children}
      </PreviewContext.Provider>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TopBar>
        <TopBarTitle text={'Asset Browser'} />
        <SearchBar placeholder={'Asset Search . . .'} />
      </TopBar>
      <PreviewProvider>
        <PreviewGrid previewCount={metaData.length} />
      </PreviewProvider>
    </div>
  );
}

// <CategoryOverview />

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
