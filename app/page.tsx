"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/card";
import Column from "@/components/column";
import Container from "@/components/container";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/components/dropdown";
import Grid from "@/components/grid";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IconButton from "@/components/icon-button";
import Image from "@/components/image";
import MenuItem from "@/components/menu-item";
import NavBar from "@/components/navbar";
import PlaceholderBlock from "@/components/placeholder-block";
import Row from "@/components/row";
import Section from "@/components/section";
import { Select, SelectTrigger, SelectMenu, SelectOption } from "@/components/select";
import Snackbar from "@/components/snackbar";
import Sticker from "@/components/sticker";
import Switch from "@/components/switch";
import TabContent from "@/components/tab-content";
import Tabs from "@/components/tabs";
import Text from "@/components/text";
import TextInput from "@/components/text-input";
import ThemeController from "@/components/theme-controller";
import { useState } from "react";

export default function Home() {
  const [selectValue, setSelectValue] = useState("");
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <>
      <ThemeController />
      <NavBar
        navButtons={
          <>
            <Button variant="text" label="Home" />
            <Button variant="text" label="About" />
          </>
        }
        iconButtons={
          <>
            <IconButton icon="search" variant="text" color="onsurface" />
            <IconButton icon="heart" variant="text" color="onsurface" />
          </>
        }
        ctaButtons={<Button label="Sign In" />}
      />

      <Container maxWidth="lg">
        <Section padding="lg">
          <Column gap="xl">
            <Heading tag="h1" fontClass="display1-bold">
              Component Showcase
            </Heading>

            {/* Badge Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Badges</Heading>
              <Row gap="md" wrapChildren>
                <Badge icon="star" color="primary" />
                <Badge icon="heart" color="secondary" scale="lg" />
                <Badge icon="zap" color="tertiary" scrim />
              </Row>
            </Section>

            {/* Button Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Buttons</Heading>
              <Row gap="md" wrapChildren>
                <Button label="Fill Button" variant="fill" color="primary" />
                <Button label="Outline Button" variant="outline" color="primary" />
                <Button label="Text Button" variant="text" color="primary" />
                <Button label="With Icons" variant="fill" color="secondary" startIcon="arrow-right" endIcon="check" />
                <Button label="Small" size="sm" />
                <Button label="Large" size="lg" />
              </Row>
            </Section>

            {/* Icon Button Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Icon Buttons</Heading>
              <Row gap="md" wrapChildren>
                <IconButton icon="heart" variant="fill" color="primary" />
                <IconButton icon="star" variant="outline" color="primary" />
                <IconButton icon="zap" variant="text" color="primary" />
                <IconButton icon="settings" size="lg" />
                <IconButton icon="menu" size="sm" />
              </Row>
            </Section>

            {/* Card Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Cards</Heading>
              <Grid columns={3} gap="md">
                <Card variant="fill" bgColor="surface">
                  <Column gap="sm">
                    <Heading tag="h3" fontClass="subheading-bold">Fill Card</Heading>
                    <Text fontClass="body">This is a fill variant card with some content.</Text>
                  </Column>
                </Card>
                <Card variant="outline" bgColor="surface">
                  <Column gap="sm">
                    <Heading tag="h3" fontClass="subheading-bold">Outline Card</Heading>
                    <Text fontClass="body">This is an outline variant card.</Text>
                  </Column>
                </Card>
                <Card variant="transparent" material="glass">
                  <Column gap="sm">
                    <Heading tag="h3" fontClass="subheading-bold">Glass Card</Heading>
                    <Text fontClass="body">This card has a glass material effect.</Text>
                  </Column>
                </Card>
              </Grid>
            </Section>

            {/* Text Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Text</Heading>
              <Column gap="sm">
                <Text fontClass="display1-bold">Display 1 Bold</Text>
                <Text fontClass="display2-bold">Display 2 Bold</Text>
                <Text fontClass="heading-bold">Heading Bold</Text>
                <Text fontClass="subheading-bold">Subheading Bold</Text>
                <Text fontClass="body">Body text</Text>
                <Text fontClass="label">Label text</Text>
                <Text fontClass="caption">Caption text</Text>
              </Column>
            </Section>

            {/* Heading Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Headings</Heading>
              <Column gap="sm">
                <Heading tag="h1" fontClass="display1-bold">H1 Heading</Heading>
                <Heading tag="h2" fontClass="display2-bold">H2 Heading</Heading>
                <Heading tag="h3" fontClass="heading-bold">H3 Heading</Heading>
                <Heading tag="h4" fontClass="subheading-bold">H4 Heading</Heading>
              </Column>
            </Section>

            {/* Icon Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Icons</Heading>
              <Row gap="md" wrapChildren>
                <Icon name="star" color="primary" />
                <Icon name="heart" color="secondary" />
                <Icon name="zap" color="tertiary" />
                <Icon name="settings" color="onsurface" />
                <Icon name="search" color="primary" strokeWidth={1.5} />
              </Row>
            </Section>

            {/* Input Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Text Inputs</Heading>
              <Column gap="md">
                <TextInput name="Default Label" placeholder="Enter text here" />
                <TextInput name="On Input Label" labelPosition="on-input" placeholder="Type here" />
                <TextInput name="With Help Text" helpText="This is helpful information" />
              </Column>
            </Section>

            {/* Switch Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Switches</Heading>
              <Row gap="md" alignItems="center">
                <Switch value={switchValue} onClick={(val) => setSwitchValue(val || false)} />
                <Text fontClass="body">Toggle switch</Text>
                <Switch onColor="secondary" offColor="surfacevariant" />
                <Text fontClass="body">Custom colors</Text>
              </Row>
            </Section>

            {/* Dropdown Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Dropdown</Heading>
              <Dropdown>
                <DropdownTrigger>
                  <Button label="Open Dropdown" />
                </DropdownTrigger>
                <DropdownMenu>
                  <MenuItem startIcon={{ name: "home" }}>Home</MenuItem>
                  <MenuItem startIcon={{ name: "user" }}>Profile</MenuItem>
                  <MenuItem startIcon={{ name: "settings" }}>Settings</MenuItem>
                  <MenuItem startIcon={{ name: "log-out" }}>Logout</MenuItem>
                </DropdownMenu>
              </Dropdown>
            </Section>

            {/* Select Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Select</Heading>
              <Select
                options={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                  { label: "Option 3", value: "3" },
                ]}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <SelectTrigger>
                  <Button label={selectValue || "Select an option"} endIcon="chevron-down" />
                </SelectTrigger>
                <SelectMenu>
                  <SelectOption value="1">Option 1</SelectOption>
                  <SelectOption value="2">Option 2</SelectOption>
                  <SelectOption value="3">Option 3</SelectOption>
                </SelectMenu>
              </Select>
            </Section>

            {/* Tabs Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Tabs</Heading>
              <Tabs tabLinks={["Tab 1", "Tab 2", "Tab 3"]}>
                <TabContent>
                  <Card>
                    <Text fontClass="body">Content for Tab 1</Text>
                  </Card>
                </TabContent>
                <TabContent>
                  <Card>
                    <Text fontClass="body">Content for Tab 2</Text>
                  </Card>
                </TabContent>
                <TabContent>
                  <Card>
                    <Text fontClass="body">Content for Tab 3</Text>
                  </Card>
                </TabContent>
              </Tabs>
            </Section>

            {/* Menu Item Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Menu Items</Heading>
              <Card>
                <Column gap="none">
                  <MenuItem startIcon={{ name: "home" }}>Home</MenuItem>
                  <MenuItem startIcon={{ name: "user" }} endIcon={{ name: "chevron-right" }}>
                    Profile
                  </MenuItem>
                  <MenuItem startIcon={{ name: "settings" }}>Settings</MenuItem>
                  <MenuItem startIcon={{ name: "help-circle" }}>Help</MenuItem>
                </Column>
              </Card>
            </Section>

            {/* Sticker Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Stickers</Heading>
              <Row gap="md" wrapChildren>
                <Sticker bgColor="primarycontainer">Primary</Sticker>
                <Sticker bgColor="secondarycontainer">Secondary</Sticker>
                <Sticker bgColor="tertiarycontainer">Tertiary</Sticker>
                <Sticker bgColor="errorcontainer">Error</Sticker>
                <Sticker bgColor="successcontainer">Success</Sticker>
              </Row>
            </Section>

            {/* Snackbar Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Snackbars</Heading>
              <Column gap="md">
                <Snackbar globalColor="surface">
                  <Text>Basic snackbar message</Text>
                </Snackbar>
                <Snackbar globalColor="primary">
                  <Icon name="check-circle" />
                  <Text>Success message with icon</Text>
                  <Button label="Action" size="sm" />
                </Snackbar>
                <Snackbar globalColor="error">
                  <Icon name="alert-circle" />
                  <Text>Error message</Text>
                  <IconButton icon="x" size="sm" />
                </Snackbar>
              </Column>
            </Section>

            {/* Image Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Images</Heading>
              <Row gap="md" wrapChildren>
                <Image src="/next.svg" alt="Next.js" width="md" height="md" aspect="1/1" />
                <Image src="/vercel.svg" alt="Vercel" width="lg" height="lg" aspect="16/9" />
              </Row>
            </Section>

            {/* Grid Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Grid</Heading>
              <Grid columns={4} gap="md">
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
              </Grid>
            </Section>

            {/* Layout Components Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Layout Components</Heading>
              <Column gap="md">
                <Card>
                  <Text fontClass="body-bold">Row with gap</Text>
                  <Row gap="md" alignItems="center">
                    <Button label="Button 1" size="sm" />
                    <Button label="Button 2" size="sm" />
                    <Button label="Button 3" size="sm" />
                  </Row>
                </Card>
                <Card>
                  <Text fontClass="body-bold">Column with gap</Text>
                  <Column gap="sm">
                    <Text fontClass="body">Item 1</Text>
                    <Text fontClass="body">Item 2</Text>
                    <Text fontClass="body">Item 3</Text>
                  </Column>
                </Card>
              </Column>
            </Section>

            {/* Placeholder Block Section */}
            <Section>
              <Heading tag="h2" fontClass="heading-bold">Placeholder Blocks</Heading>
              <Row gap="md" wrapChildren>
                <PlaceholderBlock />
                <PlaceholderBlock />
                <PlaceholderBlock />
              </Row>
            </Section>
          </Column>
        </Section>
      </Container>
    </>
  );
}
