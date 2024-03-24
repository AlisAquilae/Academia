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
### 5.1 Substitution
#### 5.1.1 The Chain Rule and the Substitution Method
Previously we have seen how we can find the [[Antidifferentiation|Antiderivative]] of a standard function. Moreover, it turned out that an almost standard function like $f(x)=e^{4x}$ could also be integrated directly. If we guess $F(x)=e^{4x}$ to be an antiderivative, we find upon differentiation an extra factor 4. Division by 4 produces a correct antiderivative; the derivative of $F(x)=\frac14e^{4x}$ is $f(x)=e^{4x}$. 

The above method seems to be a convenient technique to substantially extend our supply of antiderivatives. Unfortunately, there is a catch, and no small one indeed

>[!Example]
>We try to apply the above trick to the function 
>
>$$
>f(x)=\cos(x^2)
>$$
>
>For antiderivative we try $F(x)=\sin(x^2)$, knowing that the antiderivative of $\cos(x)$ is $\sin(x)$. Upon differentiation, we find
>
>$$
>F'(x)=\cos(x^2)-\frac{\sin(x^2)}{2x^2}
>$$
>
>Apart from the required $f(x)=\cos(x^2)$ we get an extra term, which we did not want at all. The method cle