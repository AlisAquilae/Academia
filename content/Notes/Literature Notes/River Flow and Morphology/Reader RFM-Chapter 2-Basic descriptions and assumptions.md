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
Within the spirit of the long wave approximations already made, we assume the water surface in a cross section to be completely horizontal (which is approximately true in practical situations). As a consequence, we have to calculate only one depth in each cross section. For the cross section at $x$ we choose the depth with respect to the deepest point of the cross section and denote this by $a(t,x)$ and call it *the* water depth at position $x$ and time $t$. It may also be useful to measure the water level with respect to the same zero as the bed level $z_o$. This level will be denoted by $h(t,x)$ and is referred to as water level. Figure 2.11 illustrates this definition.

![[Pasted image 20250309162736.png]]

There are various other important quantities that can be derived (so all quantities that follow are *functions* of $a$) from this water level:

1. The width $b$
2. The wetted area $A$.

>[!Note]
>The following relations with the water width are very useful (see also Figure 2.13)
>
>$$
>\begin{aligned}
>\frac{\partial A}{\partial a} &= b \\
>A(a) &= \int\limits_{0}^{a} \; \mathrm{d}\alpha \; b(\alpha)
>\end{aligned}
>$$

3. The **hydraulic depth** $d$ or cross-section average depth. This quantity is indirectly defined as follows: the wetted area equals the area of a rectangle with width $b$ and height $d$, thus:
   
   $$
   d = \frac{A}{b}
   $$
   
   This is not a directly measurable quantity, but it will prove to be handy in many formulas
4. The **wetter perimeter** $P$: the length of the cross section that has contact with the water
5. The **hydraulic radius** $R$: A rectangle with width $P$ and height $R$ has area $A$, or formally
   
   $$
   \begin{aligned}
   A &= PR \\
   R &= \frac{A}{P}
   \end{aligned}
   $$
   
   Again a not directly measurable but useful quantity



![[Pasted image 20250309162932.png]]![[Pasted image 20250309162950.png]]

>[!Info]
>In principle, given the geometry of the cross section, each of these quantities can be derived from the others

To be mathematically rigorous, the wetted area should be specified by its position $x$ along the river (as the geometry of the cross section may change) and the depth at that place at that time: $a(t,x)$ and thus write formulas containing expressions as $A(x,a(t,x))$. As these dependencies are clear, however, we often use shorthands as $A(t,x)$. Similar notational shorthands will be used for the other quantities. 

---
# 2.5 Discharge and velocities in a cross section
The amount of water flowing at a particular time and place in the river is determined by the velocity field. From the long wave POV, one is however not interested in the velocities and flows at a very local scale in the cross section but mainly in total discharge through a cross section. This quantity is usually called *the* discharge, and denoted by $Q$. 

Formally, they can be derived from the $x$-component of the velocity field, being the component in the downstream direction orthogonal to the cross section:

$$
Q(t,x) = \iint\limits_{(y,z) \in A} \; u_x (t,x,y,z)
$$

In all practical situations, the magnitude of velocity and even its direction vary within a cross section. Close to the bottom the velocity tends to zero. The maximum velocity is reached near the middle just under the surface. 

As our global view upon the river does not enable us to calculate all these variations, wer will only consider the velocity averages over a cross section and neglect the variations around this mean:

$$
u(t,x) = \frac{1}{A(t,x)} \iint_{(y,z) \in A} \; u_x (t,x,y,z)
$$

This average velocity is closely connected to the discharge

$$
\begin{aligned}
Q(t,x) &= \iint\limits_{(y,z) \in A} \; u_x (t,x,y,z) \\
&= A(t,x) \, u(t,x)
\end{aligned}
$$

This mean velocity $u(t,x)$ will be called *the* flow velocity. Another way of saying this is that we replace the whole velocity field in this cross section by its mean.

---
# 2.6 Bottom slopes
Next to the geometry of the cross-section, we need to consider how the bottom height varies over large distances. We only appreciate these large scale variations when we look at the large scale long wave perspective. 

The most important quantity describing the bottom height variation is the bottom slope $S_o$. It describes how the bed elevation varies along the river, i.e. $z_o = z_o (x)$, and is defined as

$$
S_o (x) = -\frac{\mathrm{d} z_o}{\mathrm{d}x} (x) \ll 1
$$

Since we assume that the changes in geometry, and thus also in bottom height, are gradual (i.e. very small bottom slopes) we can also state that:

$$
\text{perpendicular to the bottom} \approx \text{vertical}
$$

as illustrated in Figure 2.19 . This is an important question as, provoked by the left part of Figure 2.19, one could be uncertain on how to measure the water depth in a river: perpendicular to the bottom or just vertically. If $S_o \ll 1$, both measurements result in the same number

![[Pasted image 20250309165032.png]]

In a similar way, one can say that

$$
\text{parallel to the bottom} \approx \text{horizontal}
$$

This is consistent with the long wave assumption, where it was assumed that the characteristic $x$-scale is much larger than the characteristic vertical $z$-scale

---
# 2.7 Hydrostatic pressure
As we study only long waves, we may neglect curved stream lines, and as a result we may also assume the pressure to be **hydrostatic**, i.e. the same as in stagnant water. This means that at every point in the river, the pressure equals the status pressure of the water column above it. As a consequence, the pressure increases linearly as going from the top to the bottom (see Figure 2.20):

$$
p (t,)
$$