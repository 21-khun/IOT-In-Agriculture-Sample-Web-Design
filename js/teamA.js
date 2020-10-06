    var hello = hello || {};
    hello.teamA = hello.teamA || {};
    hello.teamA.kklm =
        function(firstName, secondName) {
            this.first = firstName;
            this.second = secondName;
            this.fullName = function() {
                return this.first + ' ' + this.second;

            }

            return this;


        }