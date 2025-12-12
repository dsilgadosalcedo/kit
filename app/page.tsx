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
import MenuItem from "@/components/menu-item";
import NavBar from "@/components/navbar";
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
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <>
      <ThemeController />
      <NavBar
        navButtons={
          <>
            <Button variant="text" label="Home" />
            <Button variant="text" label="Features" />
            <Button variant="text" label="Components" />
          </>
        }
        iconButtons={
          <>
            <IconButton icon="search" variant="text" color="onsurface" />
            <IconButton icon="bell" variant="text" color="onsurface" />
          </>
        }
        ctaButtons={<Button label="Get Started" variant="fill" color="primary" />}
      />

      {/* Hero Section */}
      <Section padding="xl" className="bg-primarycontainer">
        <Container maxWidth="lg">
          <Column gap="lg" alignItems="center" className="text-center">
            <Badge icon="zap" color="primary" scale="lg" />
            <Heading tag="h1" fontClass="display1-bold">
              Build Beautiful Interfaces
            </Heading>
            <Text fontClass="heading" className="max-w-2xl">
              A modern component library designed for creating stunning user experiences
              with carefully crafted components and thoughtful design patterns.
            </Text>
            <Row gap="md" wrapChildren>
              <Button label="Get Started" variant="fill" color="primary" size="lg" startIcon="rocket" />
              <Button label="View Docs" variant="outline" color="primary" size="lg" />
            </Row>
          </Column>
        </Container>
      </Section>

      <Container maxWidth="lg">
        {/* Stats Section */}
        <Section padding="xl">
          <Grid columns={4} gap="lg">
            <Card variant="outline" bgColor="surface" isClickable>
              <Column gap="sm" alignItems="center" className="text-center">
                <Icon name="component" color="primary" />
                <Heading tag="h3" fontClass="heading-bold">50+</Heading>
                <Text fontClass="label">Components</Text>
              </Column>
            </Card>
            <Card variant="outline" bgColor="surface" isClickable>
              <Column gap="sm" alignItems="center" className="text-center">
                <Icon name="palette" color="secondary" />
                <Heading tag="h3" fontClass="heading-bold">100%</Heading>
                <Text fontClass="label">Customizable</Text>
              </Column>
            </Card>
            <Card variant="outline" bgColor="surface" isClickable>
              <Column gap="sm" alignItems="center" className="text-center">
                <Icon name="zap" color="tertiary" />
                <Heading tag="h3" fontClass="heading-bold">Fast</Heading>
                <Text fontClass="label">Performance</Text>
              </Column>
            </Card>
            <Card variant="outline" bgColor="surface" isClickable>
              <Column gap="sm" alignItems="center" className="text-center">
                <Icon name="heart" color="error" />
                <Heading tag="h3" fontClass="heading-bold">Open</Heading>
                <Text fontClass="label">Source</Text>
              </Column>
            </Card>
          </Grid>
        </Section>

        {/* Features Section */}
        <Section padding="xl">
          <Column gap="xl">
            <Column gap="sm" alignItems="center" className="text-center">
              <Heading tag="h2" fontClass="display2-bold">Key Features</Heading>
              <Text fontClass="body">Everything you need to build modern applications</Text>
            </Column>

            <Grid columns={3} gap="lg">
              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="sparkles" color="primary" />
                    <Heading tag="h3" fontClass="subheading-bold">Design System</Heading>
                  </Row>
                  <Text fontClass="body">
                    Built on a solid design system foundation with consistent spacing, typography, and color tokens.
                  </Text>
                  <Sticker bgColor="primarycontainer">New</Sticker>
                </Column>
              </Card>

              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="layers" color="secondary" />
                    <Heading tag="h3" fontClass="subheading-bold">Material Effects</Heading>
                  </Row>
                  <Text fontClass="body">
                    Beautiful glass morphism and material effects that add depth and visual interest to your UI.
                  </Text>
                </Column>
              </Card>

              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="smartphone" color="tertiary" />
                    <Heading tag="h3" fontClass="subheading-bold">Responsive</Heading>
                  </Row>
                  <Text fontClass="body">
                    Fully responsive components that work seamlessly across all device sizes and screen resolutions.
                  </Text>
                </Column>
              </Card>

              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="moon" color="primary" />
                    <Heading tag="h3" fontClass="subheading-bold">Dark Mode</Heading>
                  </Row>
                  <Text fontClass="body">
                    Built-in dark mode support with automatic theme switching and smooth transitions.
                  </Text>
                </Column>
              </Card>

              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="code" color="secondary" />
                    <Heading tag="h3" fontClass="subheading-bold">TypeScript</Heading>
                  </Row>
                  <Text fontClass="body">
                    Fully typed with TypeScript for better developer experience and fewer runtime errors.
                  </Text>
                </Column>
              </Card>

              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="md">
                  <Row gap="sm" alignItems="center">
                    <Icon name="settings" color="tertiary" />
                    <Heading tag="h3" fontClass="subheading-bold">Customizable</Heading>
                  </Row>
                  <Text fontClass="body">
                    Extensive customization options with variants, sizes, and color schemes to match your brand.
                  </Text>
                </Column>
              </Card>
            </Grid>
          </Column>
        </Section>

        {/* Interactive Components Section */}
        <Section padding="xl">
          <Column gap="xl">
            <Column gap="sm">
              <Heading tag="h2" fontClass="display2-bold">Interactive Components</Heading>
              <Text fontClass="body">Explore our interactive component library</Text>
            </Column>

            <Grid columns={2} gap="lg">
              {/* Form Card */}
              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="lg">
                  <Heading tag="h3" fontClass="heading-bold">User Preferences</Heading>
                  
                  <Column gap="md">
                    <TextInput 
                      name="Full Name" 
                      placeholder="Enter your name"
                      helpText="This will be displayed on your profile"
                    />
                    
                    <Select
                      options={[
                        { label: "English", value: "en" },
                        { label: "Spanish", value: "es" },
                        { label: "French", value: "fr" },
                      ]}
                      value={selectValue}
                      onChange={(e) => setSelectValue(e.target.value)}
                    >
                      <SelectTrigger>
                        <Button 
                          label={selectValue || "Select Language"} 
                          endIcon="chevron-down"
                          variant="outline"
                        />
                      </SelectTrigger>
                      <SelectMenu>
                        <SelectOption value="en">English</SelectOption>
                        <SelectOption value="es">Spanish</SelectOption>
                        <SelectOption value="fr">French</SelectOption>
                      </SelectMenu>
                    </Select>

                    <Row gap="md" alignItems="center" justifyContent="space-between">
                      <Column gap="xs">
                        <Text fontClass="body-bold">Enable Notifications</Text>
                        <Text fontClass="caption">Receive updates about your account</Text>
                      </Column>
                      <Switch 
                        value={notificationsEnabled} 
                        onClick={(val) => setNotificationsEnabled(val || false)}
                      />
                    </Row>

                    <Row gap="md" alignItems="center" justifyContent="space-between">
                      <Column gap="xs">
                        <Text fontClass="body-bold">Dark Mode</Text>
                        <Text fontClass="caption">Switch between light and dark themes</Text>
                      </Column>
                      <Switch 
                        value={switchValue} 
                        onClick={(val) => setSwitchValue(val || false)}
                      />
                    </Row>

                    <Button label="Save Preferences" variant="fill" color="primary" />
                  </Column>
                </Column>
              </Card>

              {/* Actions Card */}
              <Card variant="fill" bgColor="surface" scaleFactor="subheading">
                <Column gap="lg">
                  <Heading tag="h3" fontClass="heading-bold">Quick Actions</Heading>
                  
                  <Column gap="md">
                    <Row gap="md" wrapChildren>
                      <Button label="Primary" variant="fill" color="primary" />
                      <Button label="Secondary" variant="fill" color="secondary" />
                      <Button label="Tertiary" variant="fill" color="tertiary" />
                    </Row>

                    <Row gap="md" wrapChildren>
                      <Button label="Outline" variant="outline" color="primary" />
                      <Button label="Text" variant="text" color="primary" />
                      <Button label="With Icon" variant="fill" color="primary" startIcon="arrow-right" />
                    </Row>

                    <Row gap="md" wrapChildren>
                      <IconButton icon="heart" variant="fill" color="primary" />
                      <IconButton icon="star" variant="outline" color="primary" />
                      <IconButton icon="share" variant="text" color="primary" />
                      <IconButton icon="bookmark" variant="fill" color="secondary" />
                    </Row>

                    <Dropdown>
                      <DropdownTrigger>
                        <Button label="Account Menu" endIcon="chevron-down" variant="outline" />
                      </DropdownTrigger>
                      <DropdownMenu>
                        <MenuItem startIcon={{ name: "user" }}>Profile</MenuItem>
                        <MenuItem startIcon={{ name: "settings" }}>Settings</MenuItem>
                        <MenuItem startIcon={{ name: "credit-card" }}>Billing</MenuItem>
                        <MenuItem startIcon={{ name: "log-out" }}>Logout</MenuItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Column>
                </Column>
              </Card>
            </Grid>
          </Column>
        </Section>

        {/* Tabs Section */}
        <Section padding="xl">
          <Column gap="lg">
            <Column gap="sm">
              <Heading tag="h2" fontClass="display2-bold">Content Organization</Heading>
              <Text fontClass="body">Organize your content with tabs</Text>
            </Column>

            <Tabs tabLinks={["Overview", "Details", "Settings"]}>
              <TabContent>
                <Card variant="fill" bgColor="surface">
                  <Column gap="md">
                    <Heading tag="h3" fontClass="heading-bold">Overview</Heading>
                    <Text fontClass="body">
                      This is the overview tab content. Here you can see a summary of information
                      and key metrics that are important to your users.
                    </Text>
                    <Row gap="md" wrapChildren>
                      <Sticker bgColor="primarycontainer">Active</Sticker>
                      <Sticker bgColor="successcontainer">Verified</Sticker>
                      <Sticker bgColor="secondarycontainer">Premium</Sticker>
                    </Row>
                  </Column>
                </Card>
              </TabContent>
              <TabContent>
                <Card variant="fill" bgColor="surface">
                  <Column gap="md">
                    <Heading tag="h3" fontClass="heading-bold">Details</Heading>
                    <Text fontClass="body">
                      Detailed information goes here. This tab provides in-depth information
                      about the current context or selected item.
                    </Text>
                    <Card variant="outline" bgColor="surfacevariant">
                      <Text fontClass="body">Nested card content for additional details</Text>
                    </Card>
                  </Column>
                </Card>
              </TabContent>
              <TabContent>
                <Card variant="fill" bgColor="surface">
                  <Column gap="md">
                    <Heading tag="h3" fontClass="heading-bold">Settings</Heading>
                    <Text fontClass="body">
                      Configuration and settings options are displayed in this tab.
                      Users can customize their experience here.
                    </Text>
                    <Card>
                      <Column gap="none">
                        <MenuItem startIcon={{ name: "bell" }}>Notifications</MenuItem>
                        <MenuItem startIcon={{ name: "lock" }}>Privacy</MenuItem>
                        <MenuItem startIcon={{ name: "globe" }}>Language</MenuItem>
                        <MenuItem startIcon={{ name: "help-circle" }}>Help & Support</MenuItem>
                      </Column>
                    </Card>
                  </Column>
                </Card>
              </TabContent>
            </Tabs>
          </Column>
        </Section>

        {/* Notifications Section */}
        <Section padding="xl">
          <Column gap="lg">
            <Column gap="sm">
              <Heading tag="h2" fontClass="display2-bold">Notifications</Heading>
              <Text fontClass="body">Different types of feedback messages</Text>
            </Column>

            <Column gap="md">
              <Snackbar globalColor="surface">
                <Icon name="info" />
                <Text>This is an informational message</Text>
                <Button label="Action" size="sm" variant="text" />
              </Snackbar>
              
              <Snackbar globalColor="primary">
                <Icon name="check-circle" />
                <Text>Success! Your changes have been saved</Text>
                <IconButton icon="x" size="sm" variant="text" />
              </Snackbar>
              
              <Snackbar globalColor="error">
                <Icon name="alert-circle" />
                <Text>Error: Something went wrong. Please try again.</Text>
                <IconButton icon="x" size="sm" variant="text" />
              </Snackbar>
            </Column>
          </Column>
        </Section>

        {/* CTA Section */}
        <Section padding="xl" className="bg-secondarycontainer">
          <Container maxWidth="md">
            <Column gap="lg" alignItems="center" className="text-center">
              <Heading tag="h2" fontClass="display2-bold">Ready to Get Started?</Heading>
              <Text fontClass="body">
                Join thousands of developers building beautiful interfaces with our component library.
              </Text>
              <Row gap="md" wrapChildren>
                <Button label="Start Building" variant="fill" color="primary" size="lg" startIcon="rocket" />
                <Button label="View Documentation" variant="outline" color="primary" size="lg" />
              </Row>
            </Column>
          </Container>
        </Section>
      </Container>
    </>
  );
}
