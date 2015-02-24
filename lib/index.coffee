###

   _       _
  /_\  ___| |__
 //_\\/ __| '_ \
/  _  \__ \ | | |
\_/ \_/___/_| |_|

              __  __
    ___ ___  / _|/ _| ___  ___
   / __/ _ \| |_| |_ / _ \/ _ \
  | (_| (_) |  _|  _|  __/  __/
 (_)___\___/|_| |_|  \___|\___|


Copyright (c) 2015 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Author: Richard Lord
Copyright (c) Richard Lord 2011-2012
http://www.richardlord.net


Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

###

module.exports = class ash

require './ash/map'
require './ash/class_map'
require './ash/generic_list_iterator'

class ash.signals

require './ash/signals/listener_node'
require './ash/signals/listener_node_pool'
require './ash/signals/signal_base'
require './ash/signals/signal1'
require './ash/signals/signal2'
require './ash/signals/signal2'
require './ash/signals/signal3'

class ash.core

require './ash/core/family'
require './ash/core/component_matching_family'
require './ash/core/engine'
require './ash/core/entity'
require './ash/core/entity_list'
require './ash/core/node'
require './ash/core/node_list'
require './ash/core/node_pool'
require './ash/core/system'
require './ash/core/system_list'

class ash.fsm

class ash.tick

class ash.tools
require './ash/tools/list_iterating_system'
