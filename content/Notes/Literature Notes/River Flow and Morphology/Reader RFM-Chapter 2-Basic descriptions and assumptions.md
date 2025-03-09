---
fileClass: Base, Literature Notes
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---
# 2.1 Introduction
In the previous chapter it was stated that the dynamics of waves in open channel flow is fully described by:
1. The velocity: $\overrightarrow{u} (t,x,y,z)$
2. The pressure: $p(t,x,y,z)$
3. The depth: $a(t,x,y)$

Moreover, it was argued that simplifications are needed to allow for calculations of open channel flow in practice. This chapter discusses these simplifying assumptions. A one line summary of these assumptions is that they describe the waves of interest as *one-dimensional* in space and time.

---
# 2.2 Long waves
One important property of waves is the "wave length" $\overline{L}$: a characteristic length of the variation of the water level and other flow properties in space. By comparing the wave length with a characteristic water depth, denoted here by $\overline{a}$, one can distinguish between two types of flows and waves:
- **Rapidly varied flows**: flows where changes in depth and velocity occur over short lengths: $\overline{L} \ll 10 * \overline{a}$. Flows beneath sluice gates, over weirs, etc. fall in this category. Waves of this type are called **short waves**. Figure 2.1 shows a (vertical cross section of a) velocity field of a typical short wave
- **Gradually varied flows**: changes in depth and velocity occur over long distances compared to the water depth: $\overline{L} \gg 10* \overline{a}$. Waves of this type are called **long waves**. Another name commonly used for this type of flow is **shallow water flow**. Figure 2.2 illustrates a (vertical cross section of a) velocity field of a typical long wave

![[Pasted image 20250309160934.png]]

In all practical situations in rivers and channels, *both* types of waves occur. Wind, ships, weirs, controls, etc. generate short waves. Rainfall events typically generate long waves on the scale of rivers. 

>[!Important]
>In these lecture notes, we are only interested in the study of long waves and will neglect short waves. One can restate this by saying that we are only interested in the flow phenomena at larger spatial scales

This long wave point of view has as a consequence that all the very rapid very local variations in the velocity field become invisible.  Figures 2.3 and 2.4 illustrate the local and global points of view for the case of a weir. At the "long wave" point of view, the influence of the weir is still visible by the rise of the water surface, the so-called "backwater" effect, but the velocity field as such shows no large disturbances.

![[Pasted image 20250309161332.png]]

The long wave point of view is not a kind of view we are generally used to. When visiting a river, we can only see a small part. That is why we often perceive the river as being horizontal, while in the long wave perspective a river usually has a slope. Also, the view of a weir over small scales is closer to our perception of a weir than the long wave point of view.

The long wave POV does not only show in the vertical cross-sections, as in the previous figures, but also in horizontal ones as in Figure 2.5. Locally, e.gh. in a bend of a river, there is a large variation of flow velocities, not all of them point in the same direction as some flow is more directed to the sides as other flow which follows more the central line of the river. This variation will be neglected, and we will approximate the river by a "line", as in the right-hand side of the figure. 

![[Pasted image 20250309161626.png]]

---
# 2.3 Cross section and long profile
For every position $x$ along the river, the unique place orthogonal to the flow direction is called the **cross-section**. Figure 2.6 shows a typical cross section along the river Rhine. For low land rivers, cross sections will be confined by dikes. Man made rivers usually show much more regular cross sections

![[Pasted image 20250309161810.png]]

It is important to note the vertical exaggeration that is typically used when displaying river cross sections. In practice, depth is often 20 times smaller than the river depth, and a river is actually more like a pancake than a bathtub. This has important implications for how we perceive flow in a cross-section. Used to the vertical exaggeration, we also tend to exaggerate vertical flow velocity, which in most rivers is very limited. 

We will always assume the geometry of each cross section to be completely known, i.e. the function $z_b (x,y)$ is known. We assume the geometry of the cross section and this function to be independent of time. This means that all problems concerning bed erosion, sedimentation, etc. are neglected at this point. 

![[Pasted image 20250309162234.png]]

The height of the lowest point of each cross section is called the **bed level** and will be denoted by $z_o$ (see Figure 2.9). This is measured with respect to an arbitrary zero (fixed for the whole river), usually sea level. A plot of $z_o$ versus the length of the river (thus, $x \rightarrow z_o(x)$) is called a **long profile**.

We will assume - within the spirit of the long wave POV - that all changes of the bed level alng the river (thus, along the x-direction) are very gradual. 

---
# 2.4 Levels and lengths in a cross-section
Wi