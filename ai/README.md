# GenieAI modules

Private AI model running on iExec Confidential Computing infrastucture.

Trusted Execution Environments - 'TEE' ensures computation confidentiality through mechanisms of memory encryption at the hardware level. The Application being executed and data being processed are safeguarded against even the most privileged access levels (OS, Hypervisor...). Only authorized code can run inside this protected area and manipulate its data.
In some cases, ensuring that code runs correctly without any third party altering the execution, is even more important than hiding the computation's data. This concept is called Trusted Computing.
These guarantees are critical for a decentralized AI system where code is being executed on a remote machine, that is not controlled by the requester. 

It use under the wood Intel® SGX, it's a technology that enables Trusted Computing and Confidential Computing. At its core, it relies on the creation of a special zone in the memory called an “enclave”. This enclave can be considered as a vault, to which only the CPU can have access. The code, as well as the data inside the protected zone, is totally unreadable and unalterable from the outside. This guarantees non-disclosure of data as well as tamper-proof execution of the code.