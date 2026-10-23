# @trash-kit/ui

Tailwind-first React components.

## Install

```bash
npm install @trash-kit/ui
npm install @headlessui/react lucide-react
```

## Tailwind

```css
@import "tailwindcss";
@import "@trash-kit/ui";

@source "../node_modules/@trash-kit/ui";
```

Point `@source` at the installed package, or at `packages/ui/src` in a workspace.

## Colors

Color props accept `primary`, `secondary`, `accent`, `danger`, `success`, and `warning` where a component supports them.

`Input` accepts `primary` and `secondary`. `Select` always uses the secondary surface. `Progress` accepts `primary`, `secondary`, and `accent`.

## Components

| Group      | Components                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Layout     | `Column`, `Row`, `Center`, `Container`, `Grid`, `Section`, `Divider`                                         |
| Typography | `Heading`, `Text`, `Label`                                                                                   |
| Surfaces   | `Box`, `BoxContent`, `Tag`, `IconBox`                                                                        |
| Actions    | `Button`, `Spinner`                                                                                          |
| Forms      | `Field`, `Input`, `Select`, `Checkbox`, `Switch`, `RadioGroup`, `Radio`, `FileField`, `DragAndDropFileField` |
| Overlays   | `Dialog`, `DialogContent`, `DialogActions`, `Backdrop`, `Menu`, `MenuTrigger`, `MenuContent`, `MenuItem`     |
| Navigation | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Breadcrumb`, `Pagination`, `Accordion`                    |
| Feedback   | `Alert`, `toast`, `ToastProvider`, `Progress`, `Skeleton`                                                    |
| Data       | `Avatar`, `AvatarGroup`                                                                                      |

## Usage

```tsx
<Button color='accent'>Save</Button>

<Box color='secondary'>
  <BoxContent>Content</BoxContent>
</Box>

<Field name='email' required>
  <Label>Email</Label>
  <Input type='email' placeholder='you@example.com' />
</Field>

<Dialog open={open} onClose={() => setOpen(false)} aria-label='Invite teammate'>
  <DialogContent>...</DialogContent>
  <DialogActions>
    <Button color='secondary' onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button onClick={() => setOpen(false)}>Send</Button>
  </DialogActions>
</Dialog>
```

`Box`, `BoxContent`, `Dialog`, `DialogContent`, and `DialogActions` keep content and separators separate: the outer part owns the border and radius, and the inner parts own padding.

## Migration

See [MIGRATION.md](../../MIGRATION.md) for the agent-ready migration guide.

## Development

```bash
npm run dev          # watch the library build
npm run dev:example  # run the Vite example
npm run typecheck
npm run check
npm run build
npm run build:example
```
