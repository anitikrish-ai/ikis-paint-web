# 🎨 Ikis Paint — Digital Painting Studio

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Trebuchet+MS&weight=700&size=34&duration=2600&pause=900&color=62D5FA&center=true&vCenter=true&width=800&height=65&lines=IKIS+PAINT;A+CANVAS+FOR+YOUR+IMAGINATION;DRAW.+EXPERIMENT.+CREATE." alt="Ikis Paint animated title"/>

<br/>

**A digital canvas where ideas become illustrations.**

A browser-based painting studio with dedicated color, brush, and layer workspaces.

<br/><br/>

<a href="https://ikis-paint-web.vercel.app/">
<img src="https://img.shields.io/badge/LAUNCH_STUDIO-Open_Ikis_Paint-38BDF8?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Launch studio"/>
</a>

<br/><br/>

<img src="https://img.shields.io/badge/DIGITAL_CANVAS-1920×1080-38BDF8?style=flat-square"/>
<img src="https://img.shields.io/badge/WORKSPACE-Creative_Studio-A78BFA?style=flat-square"/>
<img src="https://img.shields.io/badge/DEPLOYMENT-Vercel-111827?style=flat-square&logo=vercel&logoColor=white"/>

</div>

---

<div align="center">
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:0B1020,35:164E8A,70:38BDF8,100:A5F3FC&text=CREATE%20WITHOUT%20LIMITS&fontSize=27&fontColor=FFFFFF&fontAlignY=40&animation=fadeIn" alt="Ikis Paint creative banner"/>
</div>

## 01 / The Creative Space

**Art begins with an idea. Ikis Paint gives that idea a canvas.**

Ikis Paint is a web-based digital painting studio designed for sketching, illustration, and creative experimentation.

Instead of being just a blank drawing page, the application brings together a dedicated canvas and different creative workspaces for managing colors, brush dynamics, and layers.

Whether you're drawing anime characters, practicing line art, making rough concepts, or simply doodling, Ikis Paint provides a workspace to explore your creativity.

The idea is simple:

- Open your canvas.
- Choose your colors.
- Adjust your brush.
- Organize your layers.
- Start creating.

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Trebuchet+MS&size=19&duration=2300&pause=700&color=F0ABFC&center=true&vCenter=true&width=650&height=40&lines=One+canvas.+Endless+possibilities.;Every+stroke+is+part+of+the+process.;Make+something+that+is+uniquely+yours." alt="Creative messages"/>

</div>

## 02 / Inside the Studio

The workspace is organized around the main parts of a digital drawing workflow.

### 🎨 Color Studio

Explore and control the colors used in your artwork.

- Current color display.
- HEX color value.
- Hue adjustment.
- Color selection controls.

<details>
<summary><b>Explore the color system</b></summary>

Color values can be represented using HEX notation.

For example:

```text
#1B1B1B
```

A HEX color consists of three RGB channels:

```text
#RRGGBB

RR = Red
GG = Green
BB = Blue
```

Each channel can represent values from 0 to 255.

</details>

### 🖌️ Brush & Dynamics

Fine-tune the brush behavior to suit different drawing styles.

- Brush selection.
- Brush size adjustment.
- Opacity control.
- Smoothness adjustment.
- Additional brush options and fill controls.

<details>
<summary><b>Understanding brush settings</b></summary>

**Brush Size**

Controls the width of the drawing stroke.

**Opacity**

Controls how transparent or solid the brush appears.

**Smoothness**

Provides a setting for adjusting stroke behavior.

The interface currently displays an example brush size of 14px, opacity of 100%, and smoothness value of 4. These are interface defaults, not fixed requirements.

</details>

### 🗂️ Layers Studio

Keep your drawing organized through a dedicated layer workspace.

Visible controls include:

- Layer selection.
- Layer opacity.
- Clip.
- Alpha Lock.

<details>
<summary><b>Why layers matter</b></summary>

Layers help separate different elements of an illustration.

For example, an anime illustration might be organized conceptually into:

```text
Character Artwork
│
├── Line Art
├── Hair
├── Eyes
├── Clothing
├── Shading
└── Background
```

This is an example of an illustration workflow, not a claim about predefined layers in the application.

</details>

## 03 / Canvas Engineering

<div align="center">

<img src="https://img.shields.io/badge/CANVAS_WIDTH-1920_px-38BDF8?style=for-the-badge"/>
<img src="https://img.shields.io/badge/CANVAS_HEIGHT-1080_px-A78BFA?style=for-the-badge"/>

<br/><br/>

<img src="https://img.shields.io/badge/2%2C073%2C600-PIXEL_POSITIONS-F472B6?style=for-the-badge"/>

</div>

The drawing workspace uses a 1920 × 1080 canvas.

### Mathematical Breakdown

**01. Total Canvas Area**

\[
A = W \times H
\]

\[
A = 1920 \times 1080
\]

\[
\boxed{A = 2,073,600}
\]

**02. Aspect Ratio**

\[
R = \frac{1920}{1080}
\]

\[
\boxed{R = 16:9}
\]

**03. Percentage-Based Opacity**

For an opacity setting represented as a percentage:

\[
\alpha = \frac{P}{100}
\]

At 100% opacity:

\[
\alpha = \frac{100}{100} = 1
\]

At 50% opacity:

\[
\alpha = \frac{50}{100} = 0.5
\]

**04. Canvas Zoom**

The displayed dimensions can be estimated using:

\[
D = S \times Z
\]

Where:

- \(D\) = displayed dimension
- \(S\) = original dimension
- \(Z\) = zoom multiplier

At 100% zoom, a 1920-pixel canvas width corresponds to 1920 displayed pixels before any additional interface scaling.

<div align="center">

<img src="https://img.shields.io/badge/ASPECT_RATIO-16:9-38BDF8?style=flat-square"/>
<img src="https://img.shields.io/badge/ZOOM_REFERENCE-100%25-A78BFA?style=flat-square"/>
<img src="https://img.shields.io/badge/COLOR_FORMAT-HEX-F472B6?style=flat-square"/>

</div>

## 04 / Workspace Controls

The live interface also displays canvas navigation and workspace information.

**Canvas status information:**

```text
XY:   0, 0
DIM:  1920 × 1080
ZOOM: 100%
```

These values provide a quick reference for the canvas position, dimensions, and zoom level.

The interface also includes a zoom control and separate workspace panels for color, brush, and layers.

## 05 / Creative Possibilities

<div align="center">

### 🌸 Anime & Manga Illustration

Character concepts, facial expressions, dynamic poses, hair studies, and line-art practice.

<img src="https://img.shields.io/badge/ART_STYLE-Anime_&_Manga-F472B6?style=flat-square"/>

<br/><br/>

### ✏️ Digital Sketching

Rough drawings, gesture studies, shape exploration, and quick visual ideas.

<img src="https://img.shields.io/badge/ART_STYLE-Sketching-38BDF8?style=flat-square"/>

<br/><br/>

### 🌌 Digital Painting

Color experiments, illustration concepts, shading practice, and visual compositions.

<img src="https://img.shields.io/badge/ART_STYLE-Digital_Art-A78BFA?style=flat-square"/>

<br/><br/>

### 💡 Creative Experiments

Abstract drawings, random doodles, patterns, and personal art projects.

<img src="https://img.shields.io/badge/ART_STYLE-Experimental-22C55E?style=flat-square"/>

</div>

## 06 / Getting Started

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Trebuchet+MS&size=20&duration=2500&pause=800&color=38BDF8&center=true&vCenter=true&width=600&height=45&lines=01.+Open+the+studio;02.+Explore+the+workspace;03.+Choose+your+brush;04.+Start+creating!" alt="Getting started animation"/>

</div>

1. Open the [Ikis Paint website](https://ikis-paint-web.vercel.app/).
2. Explore Color Studio, Brush & Dynamics, and Layers Studio.
3. Adjust your available drawing settings.
4. Start working on your illustration.

<div align="center">

<a href="https://ikis-paint-web.vercel.app/">
<img src="https://img.shields.io/badge/OPEN_YOUR_CANVAS-START_CREATING-22C55E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Start creating"/>
</a>

</div>

## 07 / Development & Technology

Ikis Paint is deployed as a web application through Vercel.

The exact implementation stack should be documented from the project's source code.

Suggested technical documentation:

- Frontend framework.
- Programming languages.
- Canvas rendering technology.
- Brush and drawing implementation.
- Layer management approach.
- Styling and interface libraries.
- Build and deployment configuration.

## 08 / Run Locally

If the repository contains the complete source code, you can explore the project locally.

**Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**Enter the project directory**

```bash
cd YOUR_PROJECT_FOLDER
```

**Install dependencies**

```bash
npm install
```

**Start development**

```bash
npm run dev
```

These are example npm commands. Confirm the actual package manager and scripts in the project before running them.

## 09 / Future Development

Some ideas that could make the creative workspace even more powerful:

<details>
<summary><b>🎨 Advanced Brush Engine</b></summary>

- Additional brush presets.
- Texture-based brushes.
- Better stroke smoothing.
- More control over brush dynamics.

</details>

<details>
<summary><b>💾 Artwork Management</b></summary>

- Export drawings.
- Save and reopen projects.
- Better file management.
- Artwork history.

</details>

<details>
<summary><b>⚡ Drawing Workflow</b></summary>

- Undo and redo.
- Keyboard shortcuts.
- More efficient layer controls.
- Improved canvas navigation.

</details>

<details>
<summary><b>📱 Device Experience</b></summary>

- Improved tablet support.
- Touch-friendly controls.
- Responsive drawing workspace.
- Better stylus interaction.

</details>

These are development ideas, not currently advertised features.

## 10 / Contributing

Have an idea, found an issue, or want to improve the project?

If contributions are enabled:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Test the updated application.
5. Submit a pull request.

Keep the existing project architecture and coding conventions intact.

## 11 / License

Check the repository for a `LICENSE` file to understand the permissions and conditions for using or modifying this project.

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Trebuchet+MS&weight=700&size=25&duration=2500&pause=800&color=67D5FF&center=true&vCenter=true&width=700&height=55&lines=THANK+YOU+FOR+VISITING+IKIS+PAINT;KEEP+SKETCHING.+KEEP+CREATING.;YOUR+NEXT+MASTERPIECE+STARTS+HERE." alt="Animated closing message"/>

<br/>

<a href="https://ikis-paint-web.vercel.app/">
<img src="https://img.shields.io/badge/🎨_VISIT_IKIS_PAINT-Create_Something_Unique-38BDF8?style=for-the-badge" alt="Visit Ikis Paint"/>
</a>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:F0ABFC,40:38BDF8,100:164E8A&height=150&section=footer&text=EVERY%20STROKE%20TELLS%20A%20STORY&fontSize=21&fontColor=FFFFFF&animation=fadeIn" alt="Creative footer"/>

**IKIS PAINT** · A little space for a lot of creativity.

<sub>Designed around the joy of digital drawing.</sub>

</div>
