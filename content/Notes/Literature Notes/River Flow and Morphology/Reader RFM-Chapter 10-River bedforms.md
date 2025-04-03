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
# 10.1 Introduction
In this chapter, the focus will be on bedforms in sand-bedded rivers where two broad classes of bedforms are generally observed: ripples and dunes. After a detailed introduction into bedforms and their progression, characterisation of bedform regimes and bedform dimensions are discussed. Due to their dimensions, bedforms are a significant source of resistance to the flow. Quantitative tools and techniques are presented to calculate flow resistance due to bedforms and their implications for water depths. 

This chapter originates from the Sedimentation Engineering book edited by Marcelo H. García

---
# 10.2 Bed forms
## 10.2.1 Background knowledge and recent advances
 A major advance in the theory of alluvial channel flows has been the application of stability theory to identify the regions of flow for which the stream bed would be stable, that is the flow conditions under which a small disturbance of an initially plane bed would be dampened. The formation of sand waves is considered by most scientists as an instability problem. For instance, if a place sand bed is slightly perturbed, the flow and sediment transport will also be affected. Two possibilities exist:
 1. The changes in flow pattern and sediment transport will attenuate the amplitude of the perturbation and eventually the bed will go back to the original plane bed state (i.e. the bed is stable), or
 2. The flow and sediment transport changes cause the perturbation of the bed to grow in time, resulting in the formation of ripples, dunes, and/or antidunes (i.e. the bed is unstable)

In stability analysis, a plane bed is usually upset with a small sinusoidal bed perturbation having a certain amplitude and wave length. The goal of the analysis is to observe if the perturbation will grow (unstable) or decay (stable) with time.  

Different types of sand waves may occur simultaneously on a flat bed, but as the flow evolves only one type may reach fully-developed conditions. As will be described below, usually ripples and dunes are the most common bed forms observed for low [[Froude Number]] conditions (i.e. lower regime). Ripples are steeper and shorter than dunes and their length depends on particle diameter. Whereas dune height are both mainly functions of the flow depth and display a more complex dependency on particle size. 

Linear stability theories apply strictly to the inception of bed forms. They are only able to predict whether or not sand waves are generated. Another limitation is that the outcome is independent of the initial perturbation amplitude. Unsteady perturbations amplify or decay forever. 

## 10.2.2 Dunes, antidunes, ripples and alternate bars
The rupples, dunes and antidunes illustratred in Figure 2-36 are the classic bed forms of erodible-bed, open-channel flow. On the one hand, they are the product of flow and sediment transport, and on the other hand, they profoundly influence flow and sediment transport. In fact, all of the bed load equations are strictly invalid in the presence of bed forms. The adjustment necessary to render them valid (i.e. removal of form drag) is discussed later in this chapter

![[Pasted image 20250403112852.png]]

Ripples, dunes and antidunes are undular (wavelike) features that have wavelength $\lambda$ and wave height $\Delta$ that scale with the flow depth $H$, as defined below.

### 10.2.2.1 Dunes
Well-developed dunes tend to have wave heights $\Delta$ scaling up to about one-sixth of the depth, i.e.

$$
\frac{\Delta}{H} \le \frac{1}{6}
$$

Dune wavelength can vary considerably. A fairly typical range can be quantified in terms of dimensionless wavenumber $k$, where

$$
k = \frac{2 \pi H}{\lambda}
$$

This range is given by

$$
0.25 \lt k \lt 4.0
$$

Dunes invariable migrate downstream. They are typically approximately triangular in shape and usually (but not always) possess a slip face, beyond which the flow is separated for a certain length.

A dune progresses forward as bed load accretes on the slip face. Generally, very little bed load is able to pass beyond the face without depositing on it, whereas most of the suspended load is not directly affected by it.

Dunes are characteristic of [[Subcritical Flow]] in the Froude sense. In a shallow-water (long-wave) model, the Froude criterion dividing subcritical ($Fr \lt 1$) and supercritical ($Fr \gt 1$) flow is 

$$
Fr = 1
$$

where the [[Froude Number]] is given by

$$
Fr = \frac{U}{\sqrt{gH}}
$$

Dunes, however, do not qualify as long waves, in that their wavelength is of the order of the flow depth. A detailed potential flow analysis over a wavy bed yields the following (wave-number dependent) criterion for critical flow over a bedform

$$
Fr^2 = \frac{1}{k} \tanh(k)
$$

Note that as $k \to 0$ ($\lambda \to \infty$), $\tanh(k) \to k$, and the $Fr \to 1$ again. For dunes to occur, then, the condition

$$
Fr^2 \lt \frac{1}{k} \tanh(k)
$$

must be satisfied. Both dunes and antidunes cause the water surface to undulate as well as the bed. In the case of dunes, the undulation of the water surface is usually of much smaller amplitude than that of the bed; the two are nearly 180 degrees out of phase. 

Let $c$ denote the wave speed of the dune. The bed load transport rate by dunes can be estimated as the volume of material transported forward per unit bed area per unit time by a migrating dune. If the dune is approximated as triangular shape, the following approximation holds

$$
q \approx \frac{1}{2} \Delta c(1-\lambda_p)
$$

where
- $\Delta$ is the amplitude of the bed form
- $c$ is the celerity of the bed form
- $\Lambda_p$ is the porosity of the sediment bed

Rubin and Hunter (1982) proposed that the transport rate given by the equation above be called the bed form transport rate instead of the bed load transport rate. 

The celerity of dunes is a small fraction of the mean flow velocity. 

### 10.2.2.2 Antidunes
Antidunes are distinguished from dunes by the fact that the water surface undulations are nearly in phase with those of the bed. They are associated with [[Supercritical Flow]], in the sense that 

$$
Fr^2 \gt \frac{1}{k} \tanh(k)
$$

Antidunes may migrate either upstream or downstrean. Upstream migrating antidunes are usually rather symmetrical in shape and lack a slip face. Downstream migrating antidunes are rather rarer; these have a well-defined slip face and look rather like dunes. The distinguishing feature is the water surface undulations, which are very pronounced in the case of antidunes. 

The potential-flow criterion dividing upstream-migrating antidunes from downstream-migrating antidunes is

$$
Fr^2 = \frac{1}{k \, \tanh(k)}
$$

Values lower than the above are associated with upstream-migrating antidunes.

### 10.2.2.3 Ripples
Ripples are dune-like features that occur most of the time in the presence of a viscous sublayer. The existance of a viscous sublayer does not imply that the flow is either laminar or turbulent. Rather, when the flow is turbulent, the existence of a well-defined sublayer implies flow in the turbulent smooth regime rather than the turbulent rough regime. Ripples look very much like dunes in that they migrate downstream and have a pronounced slip face. They generally are much more three-dimensional in structure than dunes, however, and have little effect on the water surface. 

As mentioned earlier, many authors have suggested that a criterion for the existence of ripples is the existence of a viscous sublayer. Recalling that the thickness of the viscous sublayer is given by $\delta_v = 11.6 v / u_*$, it follows that ripples form when

$$
R_p = \frac{u_* D}{v} \le 11.6
$$


>[!Warning]
>Skipped the various relations and criteria discussed


### 10.2.2.4 Alternate bars
Alternate bars are bed forms most commonly found in straight alluvial channels. Their geometry is three-dimensional. Navigation conditions and streambank stability can be affected by alternate bars. When alternate bars are present, pools develop on alternate sides of the channel and the floor meanders from pool to pool. Under these conditions, the flow might start to attack the stream banks, eventually causing bank erosion and leading to the initiation of stream meandering. The pools formed by alternate bars also provide habitat and play an important role in stream ecology.

>[!Warning]
>I again skipped the relations and formulaic conditions for alternate bars


## 10.2.3 Progression of bed forms
Various bed forms are associated with various flow regimes. In the case of a sand-bed stream with a characteristic size about 0.5 mm, a clear progression is evident as flow velocity increases. This is illustrated in Figure 2-36 presented above. The bed is assumed to be initially glat. At very low imposed velocity $U$, the bed remains flat because no sediment is moved. As the velocity exceeds the critical value, ripples are formed. At higher values, dunes form and coexist with ripples. For even higher velocities, well-developed dunes form in the absence of ripples. At some point, the velocity reaches a value near the short-wave critical value in the Froude sense. Near this point, the dunes are often suddenly and dramatically washed out. This results in a flat bed known as an upper-regime (supercritical) flat bed. Further increases in velocity lead to the formation of antidunes, and finally to the chute and pool pattern. The last of these is characterised by a series of hydraulic jumps. 

The effect of bed forms on flow resistance can be explained as follows. As noted earlier for equilibrium flows in wide straight channels, the relation for bed resistance can be expressed in the form

$$
\tau_b = \rho C_f U^2
$$

where
- $C_f$ is the bed friction coefficient

If the bed were rigid and the flow rough, $C_j$ would vary only weakly with the flow. As a result, the relation between $\tau_b$ and $U$ is approximately parabolic for a flat rough bed.

![[Pasted image 20250403121525.png]]

The effect of bed forms is to increase the bed shear stress to values often well above that associated with the skin friction of a rough bed alone. In Figure 2-38, a ploit of $\tau_b$ versus $U$ is given for the case of an erodible bed. At very low values of $U$, the parabolic law is followed. As ripples and then dunes are formed, the bed shear stress rises to a maximum value. At this maximum value, the value of $C_f$ is seen to be as much as five times the value without Dunes. It is clear that dunes play a very important role with regards to bed resistance. The increased resistance results from form drag in the lee of the dune. 

As the flow velocity increases further, dune wavelength gradually increases and dune height diminishes, leading to a gradual reduction in resistance. At some point, the dunes are washed out, and the parabolic law is again satisfied. At even higher velocities, the form drag associated with antidunes appears; it is not as pronounced as that of dunes. 

In the case of a bed coarser than 1.0 mm, the ripple regime is replaced by a zone characterised by a lower-regime (subcritical) flat bed. Above this lies the ranges for dunes, upper-regime flat bed, and antidunes.

