---
title: Definitions
---

In the remainder of the document, the following terms are used as follows:

A **client** is the software running as part of a virtual cockpit's avionics suite, or a network's or virtual airline's pilot client in order to carry out data link communications. All clients must comply with the specification presented in this document. All clients are required to be able to encode and decode JavaScript Object Notation (JSON) as described in [RFC 8259](https://datatracker.ietf.org/doc/rfc8259).

An **airborne client** is a client which is running as part of a virtual cockpit's avionics suite. Airborne clients are required to be able to initiate WebSocket connections as described in [RFC 6455](https://datatracker.ietf.org/doc/rfc6455).

A **provider client** is a client which is running as part of a network's or virtual airline's pilot client. Provider clients are required to be able to bind to local TCP sockets and accept WebSocket connections as described in [RFC 6455](https://datatracker.ietf.org/doc/rfc6455).

A **feature** is any function in this specification that is not required to be implemented by a provider client. Feature support is announced to airborne clients during [service discovery](/spec/discovery).
