#!/usr/bin/env bash

python  /home/bruce/Applications/closure/library/closure/bin/build/closurebuilder.py \
    --root=/home/bruce/Applications/closure/library/ \
    --root=./cc \
    --input=./cc/ash.js \
    --namespace=ash \
    --output_mode=compiled \
    --compiler_jar=/home/bruce/Applications/closure/compiler/compiler.jar \
    --compiler_flag="--compilation_level=SIMPLE_OPTIMIZATIONS" \
    --compiler_flag="--formatting=pretty_print" \
    --compiler_flag="--define=goog.userAgent.ASSUME_WEBKIT=true" \
    --compiler_flag="--create_source_map=example.js.map" \
    --compiler_flag="--warning_level=QUIET" \
    --compiler_flag="--language_in=ECMASCRIPT5" \
    > ash-compiled.js


