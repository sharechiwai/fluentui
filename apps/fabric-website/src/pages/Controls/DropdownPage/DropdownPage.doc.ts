import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { DropdownPageProps as ExternalProps } from '@fluentui/react-examples/lib/react/Dropdown/Dropdown.doc';

const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/DropdownPage/docs/DropdownRelated.md') as string;

export const DropdownPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};
