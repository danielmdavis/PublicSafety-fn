#!/usr/bin/env bash

# Work around the fact that fn build doesn't take an --all param yet
for i in EvaluateImage HandleDroneImage OpenTicket PullAndCheck TellDroneAboutTicket UpdateTicket; do \
  fn -v build $i; \
done

fn deploy --all --local
