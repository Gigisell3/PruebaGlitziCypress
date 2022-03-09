
describe('Logearse, buscar, añadir y eliminar un servicio del carrito', function(){
    //Para el test case de este escenario creamos la precondición de estar logeados
    before(function(){
        cy
        .log("Iniciando sesión")
        cy
        .visit ('/')
        .wait(4000)
        .get('.modal-closes').click()
        cy
        .get('#log-in-link_').click()
        .get('#email').type('mail17764@irondev.com.mx')
        .get('#password').type('123456')
        .get('#submit-login').click()
    })

    it ('Agregar y eliminar del carrito el servicio de diva nails',function(){
        cy
        .get(':nth-child(2) > .links-vertical > :nth-child(1) > a').click()
        .get('.row > :nth-child(6)').click()
        .wait(3000)
        .get('#modalCoaches > .modal-dialog > .modal-content > .modal-header > .close').click()
        .get('#service-606 > .service > .card-footer > .btn').click()
        .get('#view_more').click()
         //Validar que la descripción del servicio se incluye ‘técnica brasileña’
        .get('#text_log').should('contain','técnica brasileña')
        .get('.button-add-one').click()
        .get('#add-service').click()
        .wait(3000)
        .get('#go-to-bag').click()
        cy
        .get('.button-remove-one').click()
        //Confirmamos que quede solo 1 servicio en el carrito
        .get('.ml-count-services').should('have.text','1')
        //Confirmamos que se muestre el precio de solo 1 servicio en el carrito
        .get('#ml-total').should('have.text','$1,150.00')
        //La data que está en duro puede pasarse a variable para aumentar el scope de la prueba 
        cy
        .wait(3000)
        .get('#create-appointment').click()
        .get('.col-8 > .form-check > .form-check-label > .circle').click()
        .get('#next').click()
        cy
        .get('.icon-arrow-right').click()
        .get(':nth-child(1) > .pignose-calendar-unit-sat > a').click()
        .get('#li-morning-tab-pane > .nav-link > .fas').click()
        .get('#time-7 > .col-12 > .btn').click()
        .get('#next').click()
        .get('#next').click()
        .get('.justify-content-center > :nth-child(4) > .nav-link').click()
        .get('.delete-service > .btn').click()
        .get('.justify-content-center > :nth-child(4) > .nav-link').click()
        .get('.no-header-page').should('contain','Tu bolsa está vacía')
        })


    })

    
//Falta un buscador
//Los elementos no tienen id, lo que dificulta agregar su selector