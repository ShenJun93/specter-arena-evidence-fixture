# Specter Arena owner-controlled fixture

This is a PUBLIC, ARTIFICIAL demonstration repository owned by the Specter Audit author.
It is NOT external adoption, an independent user evaluation, a production financial service,
or evidence that any real coding agent made these edits.

The base version intentionally uses floor rounding on fractional-cent discounts.
The PR branch changes rounding. The repo's ordinary test covers an integer-cent
case only. A separate reviewer-authored test, not shipped in this repository,
checks half-cent behavior against immutable base and head sources.

Never interpret green CI for one test as complete correctness.
