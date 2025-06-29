---
title: "SAniHead: Sketching Animal-Like 3D Character Heads Using a View-Surface Collaborative Mesh Generative Network"
authors: "Dong Du, Xiaoguang Han, Hongbo Fu, Feiyang Wu, Yizhou Yu, Shuguang Cui, Ligang Liu"
venue: "IEEE Transactions on Visualization and Computer Graphics"
year: 2020
slug: "2020-tvcg-sanihead"
selected: false
type: journal
pdf: "https://drive.google.com/file/d/1K5lQ3THlRghOexGQ2YU671u4uN-4vEdy/view"
abstract: "In the game and film industries, modeling 3D heads plays a very important role in designing characters. Although human head modeling has been researched for a long time, few works have focused on animal-like heads, which are of more diverse shapes and richer geometric details. In this article, we present SAniHead, an interactive system for creating animal-like heads with a mesh representation from dual-view sketches. Our core technical contribution is a view-surface collaborative mesh generative network. Initially, a graph convolutional neural network (GCNN) is trained to learn the deformation of a template mesh to fit the shape of sketches, giving rise to a coarse model. It is then projected into vertex maps where image-to-image translation networks are performed for detail inference. After back-projecting the inferred details onto the meshed surface, a new GCNN is trained for further detail refinement. The modules of view-based detail inference and surface-based detail refinement are conducted in an alternating cascaded fashion, collaboratively improving the model. A refinement sketching interface is also implemented to support direct mesh manipulation. Experimental results show the superiority of our approach and the usability of our interactive system. Our work also contributes a 3D animal head dataset with corresponding line drawings."
---

