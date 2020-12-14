'use strict'

import Button from "@storybook/react/dist/demo/Button";
import {storiesOf} from "@storybook/react";

storiesOf('Button', module)
    .add('Call to Action', () => (
        <Button>Submit</Button>
    ));
