---
fileClass: Base, Literature Notes
title: 
Parents: ["[[Coastal Oceanography and Delta Geology]]"]
Draft: 
Status: In Progress
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: ["[[Coastal Oceanography and Delta Geology]]"]
---
This chapter gives a description of ocean wave propagation, wave spectra, and their hydrodynamics in deep water and near the coast. The wave hydrodynamics presented in this chapter is based upon linear wave theory. This theory assumes (1) gravity is the only force acting on the wave, (2) water depth changes are gradual, and (3) that the fluid is inviscid, incompressible and irrotational. These assumptions generally hold for small steepness, $a |k| \ll 1$ . The latter implies that the amplitude ($a$) should be small as compared to the wave length ($2\pi / k$)

>[!Note]
>It is important to realise many (more complex) wave theories exist, such as Stokes' 2nd, 3rd or even 4th order wave theory

>[!Info]
>This chapter is mainly derived from Holthuijsen (2007) and Davidson-Arnott (2006) even tough linear wave theory was originally developed by Airy in 1825 (and is therefore also referred to as Airy wave theory). All units are MKS unless specified.

# 6.1 Simple Wave Description
In this section, a description of a simple ocean wave is presented. The propagation of a basic ocean wave, in a Cartesian coordinate system, is visualized in figure 6.1. 

![[Pasted image 20241122124446.png]]

Along the horizontal axis, the wave period and wave length are shown. The wave period ($T$) is the time that is needed to complete one complete cycle and the wave length ($L$) is the distance between the crest of two waves. In this picture, the ocean surface state at rest coincides with the vertical coordinate $z=0$. A flat bottom is assumed at a depth of $z=-d$ (not shown in the figure). If a sinusoidal wave propagates in the positive $x$-direction, then the surface of the ocean ($\eta$) is located at $z=\eta(x,t)$ and according to linear wave theory the surface undulations can be described by:

$$
\eta(x,t) = a \sin(\omega t + kx) \tag{6.1}
$$

in which
- $\omega$ is the radian frequency
- $k$ is the wave number, and
- $a$ is the amplitude of the wave

The radianf requency and the wave number are given by

$$
\omega = \frac{2\pi}{T} \tag{6.2}
$$

and

$$
k = \frac{2\pi}{L} \tag{6.3}
$$

where $T$ is the period and $L$ is the wave length, respectively.

The harmonic wave is propagating with a constant phase, this could be observed by following the crest of the wave from a fixed point

The speed at which the wave propagates is called the phase speed, and is denoted as

$$
c = \frac{\mathrm dx}{\mathrm dt} = \frac{\omega}{k} = \frac{L}{T} \tag{6.4}
$$

---
# 6.2 Orbital Motion
In the previous section the water surface motion was presented. However, a passing wave not only effects the water surface, it also sets the water under the surface in motion. In linear wave theory this movement is orbital with an amplitude that decreases with depth, see image below. This decrease in orbital diameter is hyperbolic and at a depth of half the wave length the orbital motion is already negligible.

![[Pasted image 20241122125844.png]]

The following two equations describe the horizontal and vertical velocity components respectively at any location and moment:

$$
u_x = \omega a \frac{\cos(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

$$
u_z = \omega a \frac{\sin(h)(k(d+z))}{\sin(h)(kd)}\sin(\omega t-kx) \tag{6.5}
$$

In which
- $d$ is the water depth
- $z$ is the vertical height with $z=0$ at the mean surface water elevation. 

From these equations, it is visible that the orbital velocities increase with increasing amplitude and wave frequency. In the crest of the wave ($\eta \gt 0$) the velocity is always directed in the down-wave direction. The opposite holds for the trough of the wave where the velocity is always oriented up-wave

![[Pasted image 20241122130228.png]]

Equations 6.5 and 6.6 are complicated, so in practice simplifying assumptions are made depending on the wave environment. The most common assumptions are based on the water depth $d$ and two limiting conditions; deep and shallow water

## 6.2.1 Deep Water
For deep water, one can assume the depth is much larger than the wavelength, such that $kd \to \infty$. This assumption simplifies the orbital motion equations to

$$
u_x = \omega ae^{kz} \sin(\omega t - kx) \tag{6.7}
$$

$$
u_z = \omega ae^{kz} \cos(\omega t - kx) \tag{6.8}
$$

From equations 6.7 and 6.8, it is visible that the orbital velocity components have both the same magnitude. However, the horizontal and vertical velocity component are $90 \degree$ out of phase with each other. The latter implies that the motion is exactly circular. 

The resulting velocity from the horizontal and vertical velocity component can be obtained by $u = \sqrt{u_x^2 + u_z^2}$ and using the trigonometric relation $\sin^2(x) + \cos^2(x)=1$, resulting in

$$
u = \omega ae^{kz} \tag{6.9}
$$

Thus, the velocity becomes independent. At the mean sea level surface ($z=0$) the equation reduces to $u=\omega a$. This result could however have been expected because the length of the circular motion of the water particle is equal to $2\pi a$ and completes one circle in a wave period $T$. The latter implies that a particle must travel with a constant speed that is equal to $\omega a$. 

## 6.2.2 Shallow Water
For shallow water, the assumption can be made that $kd \to 0$, which reduces equations 6.5 and 6.6 to

$$
u_x = \frac{\omega a}{kd}(\omega t - kx) \tag{6.10}
$$

$$
u_z = \omega a(1+\frac{z}{d})\cos(\omega t - kx) \tag{6.11}
$$

From these equations, it can be observed that the magnitudes of the horizontal and vertical velocity components differ. To be more precise, the horizontal velocity component has become independent of the distance from the water surface. Indeed, from equation 6.11 it is visible that the vertical velocity at the bottom ($z=-d$) is zero (a boundary condition that was used to develop linear wave theory). Thus, the particle movement at the surface is elliptical and at the bottom a water particle only moves in the horizontal direction.

![[Pasted image 20241122131725.png]]

In practice, a good rule of thumb for applying deep water and shallow water assumptions is to consider the water deep if the depth $h$ compared to the deep-water wave length $L$ is in the order of $\frac{h}{L} \gt \frac{1}{2}$. Water is considered shallow if $\frac{h}{L} \lt \frac{1}{20}$. In between deep and shallow water, the full equation 6.5 and 6.6 should be used. 

---
# 6.3 Wave Spectrum
The previous sections described a single wave traveling across the water surface. In reality however, as the wind blows over the sea, it generates many different waves. These generated waves will differ in their amplitude, wave length and frequency. This implies that a spectrum of waves is generated. The shape of this spectrum is, to a first order, dependent on the wind speed and fetch (the length over which the wind has blown, see Figure 6.6). Initially, the generated spectrum is composed of short, high frequency waves. In time, short-wave dissipation and non-linear interactions between short waves will transfer wave energy to lower frequencies (longer period waves). However, for reasons that will be discussed in next section, the wave field will disintegrate into regular fields of near-equal frequencies (narrow-banded spectra).

![[Pasted image 20241122132452.png]]

The wave spectrum can be determined from analyzing surface water elevations time series. Statistical properties such as the mean wave period, wave length and amplitude can be determined from such a time series. However, for most purposes the significant wave period and wave height are used. The significant wave height is the mean of the one third largest waves. The significant wave period is, then, the wave period corresponding to the significant wave height

Combined, wave heights and wave periods are often shown as a wave spectrum (or variance density graph or power spectrum, see figure 6.7). The wave spectrum describes how much one single frequency contributes to the total variance of the time series. Using the variance is physical meaningful, since it relates wave height to the wave energy in a wave.

>[!Info]
>The total energy per unit crest is proportional to the square of the wave height ($E = \rho gH^2/8$), see also Section 6.6. In other words, the energy in a wave is proportional to the square of the deviation from the mean surface.


![[Pasted image 20241122133737.png]]


---
# 6.4 Dispersion
A critically important concept in ocean waves is that of frequency dispersion. Analyzing a single wave (section 6.1) by its phase velocity left out the fact that the wavelength is dependent on the wave period. In deep water, the wavelength $L$ scales with the wave period squared $T^2$. 

You can insert this dependence into the equation for the phase velocity (equation 6.4) and observe that longer period waves travel faster. Because of frequency dispersion, random wave fields that are initially generated in the ocean often desintegrate into fields with more regular wave frequencies.

The relation that quantifies that longer waves travel faster than short waves can be inferred from the dispersion relationship:

$$
\omega^2 = gk \tan(h)(kd) \tag{6.15}
$$

From this equation, it is visible that longer waves (low $k$) have lower frequencies (low $\omega$) or that high frequency waves are shorter. 

From the dispersion relationship, the propagation speed of the wave can be obtained, using equation 6.4. For an arbitrary depth, the propagation speed is given by

$$
c = \sqrt{\frac{g}{k}\tan(h)(kd)} \tag{6.16}
$$

The dispersion relationship can be simplified for deep water for which the assumption is made that $kd \to \infty$ and that $\tan(h)(kd) \to 1$. This implies that equation 6.15 reduces to

$$
\omega = \sqrt{gk} \tag{6.17}
$$

This deep-water dispersion relation becomes independent of the water depth and solely depends on the wave length (or wave period). The propagation speed of a deep water wave is

$$
c = \sqrt{\frac{g}{k}} = \sqrt{\frac{gL}{2\pi}} = \frac{gT}{2\pi} \tag{6.18}
$$

From the phase velocity in deep water it is visible that low frequency waves can travel faster than the high frequency waves. Waves in which the phase velocity depends on the wave length are called dispersive waves, because in a given sea state different waves will disperse from each other. 

When a wave propagates towards land, the water depth will start to decrease. The result is that the wave will start to interact with the bottom (section 6.7). From the dispersion relationship, wave depth also has consequences for the wave length and wave speed (and for wave height, shape, and the direction, which will be discussed later).

For shallow water, assuming that $kd \to 0$ and $\tan(h)(kd) \to kd$, the dispersion relation reduces to

$$
\omega = k\sqrt{gd} \tag{6.19}
$$

By subsequently dividing by the wave number ($k$), the phase speed is obtained for shallow water as

$$
c = \sqrt{gd} \tag{6.20}
$$

It is seen that the phase speed has become independent of the wavenumber. This implies that waves in shallow water are non-dispersive and the phase velocity is only dependent of the water depth. This simplification is called the long wave approximation, and also applies to waves such as tsunamis and tidal waves. The resulting effect is that the phase speed decreases while a wave approaches the shore line

---
# 6.5 Wave Groups
Similar to spring and neap tides, ocean waves with different frequencies create an interference pattern in the sea surface amplitude. Because of frequency dispersion it is common to see waves of nearly similar frequency, which results in a so-called wave group. 

We can analyze the superposition of two waves with slightly different wavelengths (and thus phase velocities) and (for simplicity) equal amplitudes:

$$
\begin{aligned}
\eta &= \eta_1 + \eta_2 \\
&= a \cos(\omega_1 t + k_1 x) + a\cos(\omega_2t + k_2x)
\end{aligned}
 \tag{6.21}
$$

![[Pasted image 20241123090025.png]]

Here $\eta$ is the surface elevation as a result of the superposition of $\eta_1$ and $\eta_2$. 

If these two waves travel in the same directions they will reinforce each other if their crests coincide and cancel each other when they are out of phase with each other.

The superposition of the two-harmonic waves will generate groups, see figure 6.8. Intuitively, you can imagine that the propagation speed of a wave group (group velocity) is not the same as for an individual wave. Rather, the group velocity is given by the difference between respective phase velocities. This can be shown by rewriting equation 6.1 

$$
\eta = 2a \cos \left( \frac{\omega_1 - \omega_2}{2}t - \frac{k_1-k_2}{2}x \right)\sin\left( \frac{\omega_1 + \omega_2}{2}t - \frac{k_1-k_2}{2}x \right) \tag{6.22}
$$

where the sine wave is the carrier wave which travels with a radian frequency equal to the average of the two original wave radian frequencies. The cosine wave modulates the amplitude of the sine wave and can be seen as the representation of the group waves. This implies that the wave group has a radian frequency and wave number equal to the difference between the two original waves. The latter implies, that the propagation speed of a wave group is thus different from the propagations speed of the individual waves, given by:

$$
\begin{aligned}
c_{\text{group}} &= \frac{\frac{\omega_1 - \omega_2}{2}}{\frac{k_1 - k_2}{2}} \\
&= \frac{\Delta \omega}{\Delta k} \\
&= cn
\end{aligned} \tag{6.23}
$$

where $c$ is the phase speed and in which

$$
n = \frac{1}{2} \left( 1 + \frac{2kd}{\sin(h)(2kd)} \right) \tag{6.24}
$$

Again, for deep water $kd \to \infty$ and equation 6.24 reduces to $n = 1/2$ which implies that a group propagates at half the velocity of the individual harmonic waves, since, $c_{\text{group}} = c\frac{1}{2}$. Individual waves thus travel through the group waves and the group wave is kept alive because every time a wave leaves the group a new wave enters the group at the down-wave side. 

In shallow water, waves are non-dispersive and $n=1$. In a given water depth, every wave travels with the same velocity (linear wave theory), such that the wave group travels with individual waves. 

---
# 6.6 Wave Energy and Wave Energy Flux
The presence of waves at the water surface implies that water particles change their original position and have to perform work against gravity (potential energy). In addition, the fact that the water particles move implies kinetic energy. The potential energy is given by the elevation times the mass times the gravity. However, it is necessary to separate the initial potential energy (the situation in which the water surface elevation is in rest) from the total potential energy to obtain the wave-induced potential energy. This results in:

$$
\begin{aligned}
E_{\text{potential}} &= \overline{\int\limits_{-d}^\eta \rho gz \, \mathrm dz} - \overline{\int\limits_{-d}^0 \rho gz \, \mathrm dz} \\
&= \overline{\int\limits_0^\eta \rho gz \, \mathrm dz} \\
&= \frac{1}{4}\rho g a^2 
\end{aligned}\tag{6.25}
$$

in which the overbars represent that the integral is time averaged over a wave period

The kinetic energy per unit crest is equal to (integrated to the second order accuracy):

$$
E_{\text{kinetic}} = \overline{\int\limits_{-d}^\eta \frac{1}{2} \rho u^2 \, \mathrm dz} \approx \frac{1}{4} \rho g a^2 \tag{6.26}
$$

It follows that the time-averaged wave induced energy per unit area is equal to the sum of the potential and kinetic energy, $E_{\text{potential}} + E_{\text{kinetic}}$. 

>[!Info]
>An interesting result of these equations is that the total energy (per horizontal unit) is proportional to the square of the wave amplitude

Wave energy is carried across the ocean with the propagating waves. In linear wave theory, which assumes no bottom roughness and no wave dissipation, the momentum flux of the propagating waves can be considered conserved (i.e. it does not change and a momentum balance can be formulated to investigate wave properties).

Wave energy flux is defined as

$$
\begin{aligned}
Ec_g &= \frac{1}{2} \rho g a^2 c_{\text{group}}\\
&= \frac{1}{2} \rho g a^2nc \\
&= \frac{1}{8}H^2nc
\end{aligned} \tag{6.27}
$$

where $c_g$ is the group velocity. 

Because of equation 6.27, it is often said that even though individual waves travel with phase velocity, the wave energy travels with group velocity. 

---
# 6.7 Coastal Waves
Several interesting things happen when waves approach the coast and gradually transition from deep to shallow water. Two important changes to waves are their direction (refraction) and their height (shoaling).

## 6.7.1 Wave Refraction
Waves propagating in shallow water tend to align themselves with the bottom contour lines, see figure 6.9. This is the result of the dependence of the phase velocity on the water depth. The differences in propagation speed along the wave turns and aligns the wave with the bottom contour lines, which is called refraction.

![[Pasted image 20241123092456.png]]

>[!Warning]
>Skipped the derivation of Snell's Law

## 6.7.2 Shoaling
As you read earlier in section 6.5, the group velocity decreases as waves approach the shoreline. A direct consequence of the decrease in the group velocity and the conservation of the wave energy flux, is that the wave energy per wave (or wave height) must increase (equation 6.27). This is called shoaling.

Because of a decrease in the propagation speed (in shallow water phase velocity is dependent on depth) the wave amplitude must increase to conserve the energy flux.