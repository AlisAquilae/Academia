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
# Abstract
Water fluxes in catchments are controlled by physical processes and material properties that are complex, heterogeneous, and poorly characterized by direct measurement. As a result, parsimonious theories of catchment hydrology remain elusive. Here I describe how one class of catchments (those in which discharge is determined by the volume of water in storage) can be characterized as simple first-order nonlinear dynamical systems, and I show that the form of their governing equations can be inferred directly from measurements of streamflow fluctuations. I illustrate this approach using data from the headwaters of the Severn and Wye rivers at Plynlimon in mid-Wales. This approach leads to quantitative estimates of catchment dynamic storage, recession time scales, and sensitivity to antecedent moisture, suggesting that it is useful for catchment characterization. It also yields a first-order nonlinear differential equation that can be used to directly simulate the streamflow hydrograph from precipitation and evapotranspiration time series. This single-equation rainfall-runoff model predicts streamflow at Plynlimon as accurately as other models that are much more highly parameterized. It can also be analytically inverted; thus, it can be used to “do hydrology backward,” that is, to infer time series of whole-catchment precipitation directly from fluctuations in streamflow. At Plynlimon, precipitation rates inferred from streamflow fluctuations agree with rain gauge measurements as closely as two rain gauges in each catchment agree with each other. These inferred precipitation rates are not calibrated to precipitation measurements in any way, making them a strong test of the underlying theory. The same approach can be used to estimate whole-catchment evapotranspiration rates during rainless periods. At Plynlimon, evapotranspiration rates inferred from streamflow fluctuations exhibit seasonal and diurnal cycles that agree semiquantitatively with Penman-Monteith estimates. Thus, streamflow hydrographs may be useful for reconstructing precipitation and evapotranspiration records where direct measurements are unavailable, unreliable, or unrepresentative at the scale of the landscape.

---
# 1. Introduction
The spatial heterogeneity and process complexity of subsurface flow imply that any feasible hydrological model will necessarily involve substantial simplifications and generalizations. The essential question for hydrologists is which simplifications and generalizations are the right ones. 

Physically based rainfall-runoff models attempt to link catchment behavior with measurable properties of the landscape, but many properties controlling subsurface flow are only measurable at scales that are many orders of magnitude smaller than the catchment itself. Thus, although it seems obvious that catchment models should be “physically based,” it seems less obvious how those models should be based on physics. It is currently unclear whether this upscaling premise is correct, or whether the effective large-scale governing equations for these heterogeneous systems are different in form, not just different in the parameters, from the equations that describe the small-scale physics.

This observation raises the question of how we can identify the right constitutive equations to describe the macroscopic behavior of these complex heterogeneous systems.

Here I show that, if the catchment can be represented by a single storage element in which discharge is a function of storage alone, the form of this storage-discharge function can be estimated from analysis of streamflow fluctuations. In contrast to conventional methods of recession analysis, this approach does not specify the functional form of the storage-discharge relationship a priori, instead determining it directly from data. Using this approach, one can construct a first-order nonlinear differential equation linking precipitation, evapotranspiration, and discharge, with no need to account explicitly for changes in storage; these are instead inferred from the resulting changes in discharge. This single equation allows one to predict streamflow hydrographs from precipitation and evapotranspiration time series. It can also be inverted, allowing one to use streamflow fluctuations to infer precipitation and evapotranspiration rates at whole-catchment scale.

---
# 2. Field site and data (==Skipped==)


---
# 3. Catchment hydrology as a first-order dynamical system
This analysis begins, as most catchment-scale hydrological models do, with the conservation-of-mass equation

$$
\frac{\mathrm{d}S}{\mathrm{d}t} = P - E - Q \tag{1}
$$

where
- $S$ is the volume of water stored in the catchment, measured in units of depth (e.g. mm of water)
- $P$ is the rate of precipitation in units of depth per time (e.g. mm of water per hour)
- $E$ is the rate of [[Evapotranspiration]] in units of depth per time (e.g. mm of water per hour)
- $Q$ is the [[Discharge]] in units of depth per time (e.g. mm of water per hour)

$P$, $Q$, $E$ and $S$ are understood to be functions of time, and are understood to be averaged over the whole catchment.

Application of Equation 1 should take account of how its individual terms are measured, and the spatial scales over which such measurements are applicable. Of the four terms in Equation 1, only discharge is an aggregated measurement for the entire catchment. Therefore the analysis presented here explores what one can learn about catchment processes from fluctuations in streamflow, without assuming that measurements of precipitation or evapotranspiration are spatially representative. The analysis also makes no use of direct measurements of changes in storage, because they are often unavailable.

This analysis makes the fundamental assumption that this discharge in the stream, $Q$, depends solely on the amount of water stored in the catchment, $S$. That is, the analysis assumes that there is some storage-discharge function $f(S)$, such that

$$
Q = f(S) \tag{2}
$$

This premise is not valid in every catchment, but in many cases it can be a useful approximation, and it is an essential assumption in the analysis that follows. Of course, in any catchment some fraction of stream discharge may be controlled by processes other than the release of water from storage. Two obvious examples are direct precipitation onto the stream surface itself, and precipitation onto areas that are impermeable or saturated and are directly connected to the stream. These processes will route precipitation directly to discharge as bypassing flow, rather than adding it to subsurface storage. The analysis presented here does not require that bypassing flow is entirely absent, but assumes that it is not a dominant component of discharge. If, instead, discharge is dominated by bypassing flow, the approach presented here may fail, because processes such as channel routing (which are not treated in detail here) may dominate the runoff response. A method for assessing the quantitative significance of bypassing flow is presented in Section 15,4

The premise that discharge depends on storage is broadly consistent with the smaller-scale governing equations that drive subsurface transport. For example, the flow of water downward through the unsaturated zone is controlled by its matric potential and hydraulic conductivity, which are both steep nonlinear functions of water content. Flow in the saturated zone depends on the slope of the water table, which varies with storage in the saturated zone, and on the saturated hydraulic conductivity, which varies as a function of depth; thus transmissivity also depends on the total storage in the saturated zone. As a result, stream discharge is often a steep nonlinear function of groundwater levels in the surrounding catchment. Many of the processes and rate coefficients that control water flow in the subsurface are strongly, and nonlinearly, dependent on storage.

Nonetheless it is not clear how these nonlinear relationships, which may differ from point to point across the landscape, will combine to create a storage-discharge relationship for the catchment as a whole. For this reason, my approach assumes no particular functional form for the storage-discharge relationship $f(S)$, instead allowing both the form of $f(S)$ and its coefficients to be estimated directly form runoff time series data. I assume only that $Q$ is an increasing single valued function of $S$, i.e.

$$
\frac{\mathrm{d}Q}{\mathrm{d}S} \gt 0 \; \text{for all }Q\text{ and all }S
$$

and thus that the storage-discharge function is invertible. Thus the discharge in the stream provides an implicit measure of the volume of water stored in the catchment:

$$
S = f^{-1}(Q) \tag{3}
$$

Equations 1 and 2 form a first-order dynamical system, in which $P$, $E$, $Q$ and $S$ are all understood to be functions of time. This dynamical system would be particularly simple if $Q$ were a linear function of $S$. The properties of such systems have been extensively studies in hydrology, but in general $Q$ will be a nonlinear function of $S$, resulting in a richer spectrum of possible behaviours. This more general nonlinear case is the focus of the analysis presented here.

Regardless of the form that $f(S)$ takes, the structure of the dynamical system directly yields an important inference concerning catchment storage response. Because $Q$ is a function of $S$ alone, storage (and thus discharge) will be rising whenever $P - E \gt Q$, and falling whenever $Q \gt P - E$. The peak discharge ($\frac{\mathrm{d}Q}{\mathrm{d}t} = 0$) will coincide with the peak storage ($\frac{\mathrm{d}S}{\mathrm{d}t} = 0$). Because the peak rainfall corresponds to rising flow, which by definition will occur before the peak discharge, the peak flow will lag the peak rainfall, even in the absence of any travel time delays for pulses of stormflow to reach the weir. Furthermore, the peak flow will occur as the rainfall rate falls below discharge, and thus the mass balance (Equation 1) turns negative.

---
# 4. Estimating catchment sensitivity to changes in storage: Theory
Differentiating Equation 2 with respect to time and substituting Equation 1 directly yields the following differential equation for the rate of change of discharge through time:

$$
\begin{aligned}
\frac{\mathrm{d}Q}{\mathrm{d}t} &= \frac{\mathrm{d}Q}{\mathrm{d}S} \frac{\mathrm{d}S}{\mathrm{d}t} \\
&= \frac{\mathrm{d}Q}{\mathrm{d}S} (P - E - Q)
\end{aligned} \tag{4}
$$

The term $\frac{\mathrm{d}Q}{\mathrm{d}S}$ will be crucial in the analysis that follows; it is the derivative of the storage discharge relationship $f(S)$, and represents the sensitivity of discharge to changes in storage. Normally, derivatives like $\frac{\mathrm{dQ}}{\mathrm{dS}}$ would be expressed in terms of $S$, but $S$ cannot be directly measured at the catchment scale for the reasons described earlier. However, because $S$ is assumed to be a single-valued function of $Q$, $\frac{\mathrm{d}Q}{\mathrm{d}S}$ can also be expressed as a function of $Q$, here defined as $g(Q)$:

$$
\begin{aligned}
\frac{\mathrm{d}Q}{\mathrm{d}S} &= f'(S) \\
&= f'(f^{-1}(Q)) \\
&= g(Q)
\end{aligned} \tag{5}
$$

The function $g(Q)$ will be called the "sensitivity function" because it expresses the sensitivity of discharge to changes in storage. Mathematically, it is the implicit differential form of the storage-discharge relationship; it measures how changes in discharge are related to changes in storage, but it does so as a function of $Q$ (which is directly measurable) rather than $S$ (which is not). This makes it more useful than the conventional form $f'(S)$ for the analysis that follows.

The function $g(Q)$ can be estimated from observational data by combining Equiations 4 and 5 to yield

$$
\begin{aligned}
g(Q) &= \frac{\mathrm{d}Q}{\mathrm{d}S} \\
&= \frac{\frac{\mathrm{d}Q}{\mathrm{d}t}}{P - E - Q}
\end{aligned} \tag{6}
$$

which implies that the slope of the storage-discharge function $f(S)$ can be determined from instantaneous measurements of precipitation, evapotranspiration, discharge and the rate of change of discharge. Of the free fluxes $P$, $E$ and $Q$, discharge can be measured more reliably than precipitation or evapotranspiration at the whole-catchment scale, for the reasons described earlier. Therefore, Equation 6 can be most accurately estimated when precipitation and evapotranspiration fluxes are small compared to discharge ($P \ll Q$ and $E \ll Q$). Under these circumstances, Equation 6 is approximated by

$$
g(Q) = \frac{\mathrm{d}Q}{\mathrm{d}S} \approx - \frac{\frac{\mathrm{d}Q}{\mathrm{d}t}}{Q} \tag{7}
$$

Equation 7 implies that one can estimate the sensitivity function $g(Q)$ from the time series of $Q$ alone. To do this, one must identify intervals of time when precipitation and evapotranspiration are small compared to discharge, but it is not necessary to measure either $P$ or $E$ accurately as long as their magnitude compared to $Q$ is known. 

From the sensitivity function $g(Q)$, one can derive the storage-discharge relationship by first inverting Equation 5

$$
\int \mathrm{d}S = \int \frac{\mathrm{d}Q}{g(Q)}
$$


thus obtaining $S$ as a function of $Q$, and then by inverting this function to obtain $Q$ as a function of $S$. 

Apart from the requirement that $Q = f(S)$ must be an increasing function of $S$ (and thus that $g(Q)$ must always be positive), nothing in the approach outlined here requires $f(S)$ or $g(Q)$ to have any particular mathematical form. In practice, $g(Q)$ will be an empirical function that is estimated from streamflow time series data, and it could potentially exhibit different functional forms in different catchments. A few simple functional forms of $g(Q)$ can be integrated and inverted analytically to yield closed-form solutions for $f(S)$. For other functional forms, Equation 8 can be solved by numerical integration in order to construct an empirical storage-discharge relationship. 

---
>[!Warning]
>I changed my methodology in summarising these papers halfway through this paper, which explains the sudden cut I make here


# 1. Introduction
The paper's central hypothesis is that some catchments can be modeled as simple nonlinear first-order dynamical systems, where discharge is a function of storage alone (Q = f(S)). He argues that instead of specifying the storage-discharge function a priori, it can be inferred from streamflow data directly.

**Key assumptions:**
- Catchment behaves as a single storage element.
- Discharge depends only on storage (i.e., no dominant bypass flow).
- Q = f(S) is monotonic and invertible.

# 3. 