Vue.component('chariot', {
    props: ['chariot', 'selected'],
    template: '#template',
    methods:{
        selectedChariot: function(){
            this.selected = this.chariot;
        }
    },computed:{
        button_text: function(){
            let text = "Pick Chariot";
            if (this.selected != null){
                if (this.selected == this.chariot)
                    text = "Ridding";
                else if (this.selected.horses > this.chariot.horses)
                    text = "Dismiss Horses";
                else if (this.selected.horses < this.chariot.horses)
                    text = "Hire Horses";
            }
           return text;
        }, isDisabled: function(){
            let disable = false;
            if (this.selected != null)
                disable = this.selected === this.chariot;
            
            return disable;
        }
        
    }
});

new Vue({
    el: "#app",
    data: {
        chariots:[
            {name: "Olympus", horses: 4},
            {name: "Sagitta", horses: 3},
            {name: "Icarus", horses: 2},
            {name: "Abraxas", horses: 1}
        ],
        selected: null
    }
});
    