---
fileClass: Base, Summaries
title: 
Parents: ["[[Geophysical Fluid Mechanics]]"]
Draft: 
Status: In Progress
Related Notes: ["[[Reader GFM-Chapter 4-Stress strain and rotation tensors]]"]
Related Terminology: 
Related Courses: ["[[Geophysical Fluid Mechanics]]"]
---
>[!Warning]
>This addendum contain the information from [[Reader GFM-Chapter 4-Stress strain and rotation tensors|Chapter 4]], but has been reorganised in a way which made more sense to me.

# Introduction to stress and strain
In geophysical fluid mechanics, stress describes forces that influence and shape the movement of a fluid. These stresses are responsible for deformations in the fluid, which are mathematically described using strain and rotation
- **Strain** (deformation without rotation): a measure of how the fluid elements stretch or compress
- **Rotation** (without deformation): a measure of how the fluid spins without changing its shape, i.e. the swirl of the flow

>[!Important]
>It is important to emphasise that stress does not directly cause rotation. Stress only causes strain, or deformation. Such deformations can be due to equal pressure from all directions, in which case the fluid expands or compresses but does not rotate. Conversely, fluid can rotate independently of stress, through a process called **rigid-body rotation**. However, stress-induced strain can cause rotation, in the specific case of [[Shear Strain]]. Such strain creates velocity differences between layers of fluid. This creates vorticity and induces rotation in the fluid


Based on the combination of translation, deformation and rotation, we can differentiate between 4 types of motion
- Rigid-body motion: only translation and rotation, with no deformation
- Spin rigidly: pure rotation
- Deformation while spinning: shear-induced rotation
- Flow smoothly: translation without rotation

Finally, before deriving deformation and rotation mathematically, it is important to differentiate rotation from vorticity. As mentioned before, rotation refers to how much a fluid element spins. Vorticity refers to the mathematical measure of rotation in a fluid