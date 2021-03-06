import * as React from 'react';

import { IDocPageProps } from '@fluentui/react-next/lib/common/DocPage.types';

import { CalloutBasicExample } from './Callout.Basic.Example';
import { StatusCalloutExample } from './Callout.Status.Example';
import { CalloutFocusTrapExample } from './Callout.FocusTrap.Example';
import { CalloutDirectionalExample } from './Callout.Directional.Example';
import { CalloutCoverExample } from './Callout.Cover.Example';

const CalloutBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Callout/Callout.Basic.Example.tsx') as string;
const StatusCalloutExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Callout/Callout.Status.Example.tsx') as string;
const CalloutFocusTrapExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Callout/Callout.FocusTrap.Example.tsx') as string;
const CalloutDirectionalExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Callout/Callout.Directional.Example.tsx') as string;
const CalloutCoverExampleCode = require('!raw-loader!@fluentui/react-examples/src/react-next/Callout/Callout.Cover.Example.tsx') as string;

export const CalloutPageProps: IDocPageProps = {
  title: 'Callout',
  componentName: 'Callout',
  componentUrl: 'https://github.com/microsoft/fluentui/tree/master/packages/react-next/src/components/Callout',
  examples: [
    {
      title: 'Default Callout',
      code: CalloutBasicExampleCode,
      view: <CalloutBasicExample />,
    },

    {
      title: 'FocusTrapCallout Variant',
      code: CalloutFocusTrapExampleCode,
      view: <CalloutFocusTrapExample />,
    },
    {
      title: 'Non-focusable Callout with accessible text',
      code: StatusCalloutExampleCode,
      view: <StatusCalloutExample />,
    },
    {
      title: 'Callout with directional hint',
      code: CalloutDirectionalExampleCode,
      view: <CalloutDirectionalExample />,
    },
    {
      title: 'Callout that covers the target element',
      code: CalloutCoverExampleCode,
      view: <CalloutCoverExample />,
    },
  ],
  overview: require<string>('!raw-loader!@fluentui/react-examples/src/react-next/Callout/docs/CalloutOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/react-next/Callout/docs/CalloutBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};
