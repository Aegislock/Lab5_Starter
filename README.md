# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Felix Tong

1) Message feature

I would not primarily use a unit test to test the full “message” feature because it involves multiple components like user input, networking, and message delivery between systems. Unit tests are better suited for testing small pieces of logic inside the feature rather than the entire send-and-receive workflow. Instead, this feature is more appropriately tested with integration or end-to-end tests.

2) Max message length feature

I would use a unit test to test the “max message length” feature because it is a simple, self-contained rule. It only involves checking whether a message exceeds 80 characters, which does not depend on external systems. This makes it ideal for fast and reliable unit testing.