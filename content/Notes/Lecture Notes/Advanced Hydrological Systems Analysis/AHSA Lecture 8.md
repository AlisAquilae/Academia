---
fileClass: Base, Lecture Notes
title: 
Parents: ["[[Advanced Hydrological Systems Analysis]]"]
Draft: 
Status: In Progress
Related Notes: 
Related Terminology: 
Related Courses: ["[[Advanced Hydrological Systems Analysis]]"]
---
# Introduction
Today: calibration, sensitivity and uncertainty part 3.

Yesterday: finding minimum of objective function using first-order (only gradient) and second-order (assume quadratic function near minimum) minimisation.

If we do this, how can we quantify the uncertainty in my parameter set? This uncertainty also generates uncertainty in my output, which we will discuss tomorrow

---
# Uncertainty in Parameters
Why do we never find our objective function to be perfect (e.g. $SS = 0$)? This is because we have uncertainty which we can never (fully) resolve. 

Again, we here only consider uncertainty in parameters, which is fully explained by uncertainty in measurements.

Thus, we never find $SS = 0$ due to observation errors. This is of course not reality, because there is always also uncertainty in the model, which we do not account for here. 

## The model demon
Consider a demon which has the same model. The demon knows the true parameter values, and can therefore produce a true model output (both of which we don't know). The model gives use these true values blurred by (random) noise. The model output and no